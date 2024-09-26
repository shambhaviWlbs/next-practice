import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className={`${styles.shape} mb-6`}>
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="relative w-full md:w-1/2 p-4">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-relaxed`}>
            <strong>Welcome to Acme.</strong> This is an example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-600 underline hover:text-blue-800 transition">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-2 self-start mt-4 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-transform transform hover:scale-105 hover:bg-blue-500 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block object-cover rounded-lg shadow-lg"
            alt="Screenshots of the dashboard project showing desktop version"
          />
           <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
        </div>
      </div>
    </main>
  );
}
