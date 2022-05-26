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
      <div className="bg-white min-h-screen h-full w-full min-w-fit flex flex-col">
        <header className="p-8 text-white bg-blue-900 border-b-8 border-blue-300">
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
        <main className="md:container mx-auto bg-white p-8">{children}</main>
        <footer className="md:container md:mx-auto bg-white flex flex-row justify-between text-sm p-4 border-t-2 mt-auto">
          <div className="">
            Frans VVS AB
            <br />
            Surteby Enelyckan
            <br />
            51994 Björketorp
            <br />
            <br />
            <a href="tel:0320-60030">0320-60030</a>
            <br />
            <a href="tel:070-6247280">070-6247280</a>
          </div>
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
    </>
  );
}
