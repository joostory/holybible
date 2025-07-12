import Link from "next/link";
import { Gugi } from "next/font/google";
import { useSetAtom } from "jotai"
import { searchDialogOpenState, settinsgDialogOpenState } from "state/dialog"
import { Cog6ToothIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useEffect } from "react"

const appFont = Gugi({
  weight: "400",
  subsets: ["latin"],
})

function SearchButton() {
  const setOpen = useSetAtom(searchDialogOpenState)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [setOpen])

  return (
    <button onClick={() => setOpen(true)}>
      <MagnifyingGlassIcon className="w-5 h-5" />
    </button>
  )
}

function SettingsButton() {
  const setOpen = useSetAtom(settinsgDialogOpenState)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "," && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [setOpen])

  return (
    <button onClick={() => setOpen(true)}>
      <Cog6ToothIcon className="w-5 h-5" />
    </button>
  )
}


export default function Header() {
  return (
    <div className="navbar bg-base-300 text-base-content justify-between">
      <div className="flex ml-4">
        <img
          src="/images/ico_holybible.png"
          className="h-6 mr-3 flex-none"
          alt="HolyBible"
        />
        <Link
          href={'/'}
          className={`normal-case text-xl flex-1 font-bold ${appFont.className}`}>
          HolyBible
        </Link>
      </div>
      <div className="flex-none">
        <ul
          className={`menu menu-compact menu-horizontal px-1 py-0 ${appFont.className}`}>
          <li>
            <SearchButton />
          </li>
          <li>
            <SettingsButton />
          </li>
          <li>
            <a
              href="https://github.com/joostory/oh-my-bible-epub/releases/latest"
              target="_blank"
              className="text-xs"
            >
              Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
