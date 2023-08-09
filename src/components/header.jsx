import Link from "next/link";

function Header() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">Experience</Link>
      </li>
      <li>
        <Link href="/">Projects</Link>
      </li>
      <li>
        <Link href="/">Skills</Link>
      </li>
      <li>
        <Link href="/">Contact</Link>
      </li>
    </ul>
  );
}

export default Header;
