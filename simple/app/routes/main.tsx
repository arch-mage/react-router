import { useEffect, useState } from 'react'

export default function Page() {
  const [state, setState] = useState<'dark' | 'light'>('dark')
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      const mt = mutations.find((mt) => {
        return mt.type === 'attributes' && mt.attributeName === 'class'
      })
      if (mt?.target instanceof HTMLHtmlElement) {
        setState(mt.target.classList.contains('dark') ? 'dark' : 'light')
      }
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return observer.disconnect.bind(observer)
  }, [])
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <button
        type="button"
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="h-10 rounded-md bg-gray-200 px-3 py-2 dark:bg-gray-900">
        {state}
      </button>
    </main>
  )
}
