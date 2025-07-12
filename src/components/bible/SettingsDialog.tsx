import { useAtom } from "jotai";
import FontSelector from "./FontSelector";
import { settinsgDialogOpenState } from "state/dialog"
import ThemeSelector from "components/bible/ThemeSelector"
import Dialog from "components/common/Dialog"


export default function SettingsDialog() {
  const [open, setOpen] = useAtom(settinsgDialogOpenState)
  
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <h3 className="font-bold text-lg mb-4">Settings</h3>
      <div className="space-y-4">
        <ThemeSelector />
        <FontSelector />
      </div>
    </Dialog>
  )
}
