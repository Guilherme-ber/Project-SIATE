import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start gap-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            SIAT - Sistema Integrado de Acompanhamento Técnico
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Gestão administrativa e técnica do projeto de Basquete da UFJF.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full">
          <Link
            href="/login"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 text-white transition-colors hover:bg-indigo-700 sm:w-auto"
          >
            Entrar no Sistema
          </Link>
          <Link
            href="/login"
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:w-auto"
          >
            Área Técnica
          </Link>
        </div>
      </main>
    </div>
  );
}
