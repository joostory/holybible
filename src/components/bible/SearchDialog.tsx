import { disassembleHangul } from 'domain/chosung'
import { BIBLE_NAMES } from 'domain/bible-names';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai'
import { searchDialogOpenState } from 'state/dialog'
import Dialog from 'components/common/Dialog'


export function SearchDialog() {
  const [open, setOpen] = useAtom(searchDialogOpenState)

  const router = useRouter()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100)
    }
  }, [open])

  const results = BIBLE_NAMES.filter(bible => {
    const disassembledQuery = disassembleHangul(query.toLowerCase());
    const disassembledName = disassembleHangul(bible.name.toLowerCase());
    const disassembledAbbrs = bible.abbreviations.map(abbr => disassembleHangul(abbr.toLowerCase()));

    return disassembledName.includes(disassembledQuery) ||
           disassembledAbbrs.some(abbr => abbr.includes(disassembledQuery));
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query])

  useEffect(() => {
    if (resultsContainerRef.current) {
      const selectedElement = resultsContainerRef.current.children[selectedIndex] as HTMLDivElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex])

  function handleClose() {
    setOpen(false)
    setQuery('')
  }

  function handleSelect(bcode: number) {
    const version = router.query.version || 'GAE'
    router.push(`/${version}/${bcode}/1`)
    setOpen(false)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => (prev + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex].bcode)
      }
    }
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <h3 className="font-bold text-lg mb-4">Search Bible</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="e.g., Genesis, John, ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="input input-bordered w-full"
      />
      <div ref={resultsContainerRef} className="mt-4 max-h-60 overflow-y-auto">
        {results.map((bible, index) => (
          <div
            key={bible.bcode}
            onClick={() => handleSelect(bible.bcode)}
            className={`p-2 hover:bg-base-200 cursor-pointer rounded-md ${selectedIndex === index ? 'bg-base-300' : ''}`}
          >
            {bible.name}
          </div>
        ))}
      </div>
    </Dialog>
  )
}

