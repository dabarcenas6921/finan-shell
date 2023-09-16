import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl normal-case">FinanShell</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/lessons">Financial Literacy</Link>
          </li>
          <li>
            <Link href="/hub">Community Hub</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-2">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignUpButton />
        </SignedOut>
      </div>
    </div>
  );
}
