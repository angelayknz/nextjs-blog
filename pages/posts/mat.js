import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>COMPANIES USING NEXT.JS</title>
      </Head>
      <h2>Topic: Electron by Mat</h2>

      <Image priority src="/images/electrons.jpeg" height={800} width={600} />
    </Layout>
  )
}
