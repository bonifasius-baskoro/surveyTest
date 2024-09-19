import Head from 'next/head';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <Head>
        <title>Terima Kasih</title>
        <meta name="description" content="Thank you page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8 animate-fade-in-up">
          Terima Kasih
        </h1>
        <Link href="/" className="inline-block">
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105">
            Go to Home
          </button>
        </Link>
      </main>
    </div>
  );
}