import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <a href="https://nextjs.org" target="_blank">
            Angela: Next.js
          </a>
        </p>
        <p>
          <Link href="/posts/mat">
            <a>Mat: Electron</a>
          </Link>
        </p>

        <p>
          <Link href="/posts/charlotte">
            <a>Charlotte: Cross site scripting </a>
          </Link>
        </p>

        <p>
          <Link href="/posts/la">
            <a>L.A. : IoT - Internet of Things </a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}
