import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import List, { ListItem } from "components/layout/List"
import { Bible } from "domain/bible"
import Link from "next/link"

type BibleListProps = {
  bibles: Bible[]
}

export default function BibleList({ bibles }: BibleListProps) {
  return (
    <List>
      <ListItem>
        <Link href="/">
          <ChevronLeftIcon className="h-5 w-5" />
        </Link>
      </ListItem>
      {bibles.map(b =>
        <ListItem key={b.bcode}>
          <Link href={`/${b.vcode}/${b.bcode}`}>{b.name}</Link>
        </ListItem>
      )}
    </List>
  )
}
