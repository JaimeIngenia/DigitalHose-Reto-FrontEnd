import Link from "next/link";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <main className="w-full border-2 border-blue-500">
        <p>Hola Mundo</p>
        <Link href="/login">Login</Link>
      </main>
    // </main>
  );
}
