import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a>Financial Literacy</a>
              <ul className="p-2">
                <li>
                  <Link href="/lessons/credit-building">
                    Credit Building Tips and Tricks
                  </Link>
                </li>
                <li>
                  <Link href="/lessons/banking-safety">
                    Digital Banking Safety
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/hub">Community Hub</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl normal-case">FinanShell</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Financial Literacy</summary>
              <ul className="p-2">
                <li>
                  <Link href="/lessons/credit-building">
                    Credit Building Tips and Tricks
                  </Link>
                </li>
                <li>
                  <Link href="/lessons/banking-safety">
                    Digital Banking Safety
                  </Link>
                </li>
              </ul>
            </details>
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
