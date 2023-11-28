import Head from 'next/head'
import s from '@/styles/Home.module.scss'
// link
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={s.hero}>
          <Link className={s.hero__link} href={`/wishlist`}>Go to List</Link>
        </section>
      </main>
    </>
  )
}