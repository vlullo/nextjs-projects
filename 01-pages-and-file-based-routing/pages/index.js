import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          The home page
        </h1>
        <ul>
          <li>
            <Link replace href="/about">About</Link>  
          </li>
          <li>
            <Link href="/blog">Blog</Link>  
          </li>
          <li>
            <Link href="/clients">Clients</Link>  
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>  
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home;
