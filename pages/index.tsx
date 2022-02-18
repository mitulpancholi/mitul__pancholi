import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mitul Pancholi</title>
        <meta name="description" content="Senior Front-end Developer, Specialized in ReactJs, NextJs and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header />
    </div>
  )
}
