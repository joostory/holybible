import { useAtom } from "jotai"
import FontSelector from "./FontSelector"
import { settinsgDialogOpenState } from "state/dialog"
import ThemeSelector from "components/bible/ThemeSelector"
import Dialog from "components/common/Dialog"


export default function SettingsDialog() {
  const [open, setOpen] = useAtom(settinsgDialogOpenState)
  
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <fieldset className="fieldset pb-4">
        <legend className="fieldset-legend mb-4 font-bold text-lg">Settings</legend>

        <label className="label">Theme</label>
        <ThemeSelector />
        
        <label className="label mt-4">본문 글꼴</label>
        <FontSelector />
        
      </fieldset>
    </Dialog>
  )
}
