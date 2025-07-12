import { ReactNode } from "react"
import Header from "components/layout/Header"
import { useAtomValue } from "jotai"
import { themeState } from "state/theme"
import SettingsDialog from "../bible/SettingsDialog"
import { SearchDialog } from "components/bible/SearchDialog"

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const theme = useAtomValue(themeState);

  return (
    <div className="h-screen flex flex-col" data-theme={theme}>
      <Header />
      <div className="absolute top-16 left-0 right-0 bottom-0">{children}</div>
      <SearchDialog />
      <SettingsDialog />
    </div>
  )
}
