import Link from "next/link";
import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" }); Ex

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <Link href="/sign-up">Sign Up</Link>
      </div>
    </main>
  );
}
