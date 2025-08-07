import { ReactNode, useEffect, useRef, useState } from 'react'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline'

type ContentProps = {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [fullscreen, setFullscreen] = useState(false)

  function handleFullscreen() {
    if (ref.current) {
      ref.current.requestFullscreen()
    }
  }

  useEffect(() => {
    const listener = () => {
      setFullscreen(!!document.fullscreenElement)
    }

    if (ref.current) {
      ref.current.addEventListener('fullscreenchange', listener)
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('fullscreenchange', listener)
      }
    }
  }, [ref])


  return (
    <div ref={ref} className="absolute inset-0 font-serif md:left-60 flex justify-center lg:py-5 lg:dark:bg-base-200">
      <div className={`overflow-y-auto lg:w-2xl lg:rounded-xl lg:shadow-lg bg-base-100 lg:p-5 ${fullscreen && 'lg:w-4xl text-xl'}`}>
        {children}
      </div>

      {!fullscreen &&
        <button className='absolute btn btn-soft btn-circle right-5 bottom-5 hidden lg:flex' onClick={handleFullscreen}>
          <ArrowsPointingOutIcon className="w-5 h-5" />
        </button>
      }
    </div>
  )
}
