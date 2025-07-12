import { ReactNode, useEffect, useState } from "react";
import Header from "components/layout/Header";
import { useAtomValue } from "jotai";
import { themeState } from "state/theme";
import { Search } from "components/bible/Search";
import SettingsDialog from "./SettingsDialog";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const theme = useAtomValue(themeState);
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col" data-theme={theme}>
      <Header
        onSearchClick={() => setSearchOpen(true)}
        onSettingsClick={() => setSettingsOpen(true)}
      />
      <div className="absolute top-16 left-0 right-0 bottom-0">{children}</div>
      <Search open={searchOpen} onOpenChange={setSearchOpen} />
      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  );
}
