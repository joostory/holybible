export default function Header() {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1 flex ml-4">
        <img src="/images/ico_holybible.png" className="h-6 mr-3 flex-none" />
        <h1 className="normal-case text-xl flex-1 font-bold">
          HolyBible
        </h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="https://play.google.com/store/apps/details?id=net.joostory.holybible" target="_blank">Download</a></li>
          <li><a href="https://oh-my-bible.tistory.com/" target="_blank">About</a></li>
        </ul>
      </div>
    </div>
  )
}
