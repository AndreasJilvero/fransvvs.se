import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Frans VVS</title>
        <meta name="description" content="Frans VVS AB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen bg-gradient-to-r from-gray-200 to-gray-400">
        <div className="container max-w-screen-lg m-auto md:pt-8">
          <header className="p-8 text-white bg-blue-900">
            <h1 className="text-6xl text-center mb-6">Frans VVS</h1>

            <nav className="text-lg">
              <ul className="m-auto flex flex-wrap justify-between max-w-md gap-2">
                <li>
                  <Link href="/">Hem</Link>
                </li>
                <li>
                  <Link href="/contact">Kontakt</Link>
                </li>
                <li>
                  <Link href="/map">Karta</Link>
                </li>
                <li>
                  <Link href="/suppliers">Leverantörer</Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className='bg-blue-300 h-2'></div>
          <main className="bg-white p-8">{children}</main>
          <footer className="text-right text-sm p-4">
              <a
                href="https://andreas.jilvero.se"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Made by Andreas Jilvero AB
              </a>
            </footer>
        </div>
      </div>
    </>
  );
}
