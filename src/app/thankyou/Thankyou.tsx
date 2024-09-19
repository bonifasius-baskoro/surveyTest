import Head from 'next/head';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <Head>
        <title>Terima Kasih</title>
        <meta name="description" content="Thank you page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-bold text-white text-center animate-fade-in-up">
          Terima Kasih
        </h1>
      </main>
    </div>
  );
}