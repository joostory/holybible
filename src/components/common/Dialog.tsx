import { useEffect, useRef } from "react"

interface DialogProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Dialog({open, onClose, children}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialogNode = dialogRef.current
    if (!dialogNode) return

    if (open) {
      dialogNode.showModal()
    } else {
      dialogNode.close()
    }
  }, [open])

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;

    const handleClose = () => {
      onClose()
    }

    dialogNode.addEventListener('close', handleClose)
    return () => {
      dialogNode.removeEventListener('close', handleClose)
    }
  }, [])
  
  return (
    <dialog ref={dialogRef} className={`modal`}>
      <div className="modal-box">
        {children}
      </div>

      <form method="dialog" className="modal-backdrop backdrop-blur-xs">
        <button>close</button>
      </form>
    </dialog>
  )
}
