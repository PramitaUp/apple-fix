import { Link } from 'expo-router';

interface NavButtonProps {
  text: string;
  id?: string;
  pageName?: string;
}

function NavButton({ text, id, pageName }: NavButtonProps) {
  if (pageName == undefined) {
    pageName = ""
  }

  return (
    <div>
      <Link href={"/" + pageName} asChild>
        <input type="button" value={text}></input>
      </Link>

    </div>
  )
}

export default NavButton;
