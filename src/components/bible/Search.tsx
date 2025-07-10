import { BIBLE_NAMES } from '../../domain/bible-names';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Search({ open, onOpenChange }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;

    if (open) {
      dialogNode.showModal();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100); // Delay focus to ensure the dialog is ready
    } else {
      dialogNode.close();
    }
  }, [open]);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;

    const handleClose = () => {
      onOpenChange(false);
      setQuery('');
    };

    dialogNode.addEventListener('close', handleClose);
    return () => {
      dialogNode.removeEventListener('close', handleClose);
    };
  }, [onOpenChange]);

  const results = BIBLE_NAMES.filter(bible =>
    bible.name.toLowerCase().includes(query.toLowerCase()) ||
    bible.abbreviations.some(abbr => abbr.toLowerCase().includes(query.toLowerCase()))
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (resultsContainerRef.current) {
      const selectedElement = resultsContainerRef.current.children[selectedIndex] as HTMLDivElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  const handleSelect = (bcode: number) => {
    const version = router.query.version || 'GAE';
    router.push(`/${version}/${bcode}/1`);
    onOpenChange(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex].bcode);
      }
    }
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box bg-base-100">
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
      </div>
      <form method="dialog" className="modal-backdrop backdrop-blur-xs">
        <button>close</button>
      </form>
    </dialog>
  );
}

