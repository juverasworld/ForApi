import Head from 'next/head'
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

import { GetStaticProps } from 'next'
import Hero from '../components/Hero'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    // <Layout home={true}>
    //   <Head>
    //     <title>HOME</title>
    //   </Head>
    //   <section classNameName={utilStyles.headingMd}>
    //     <p classNameName='heading m-2'>FullStack Dev | Father | Husband</p>
    //     <h1 classNameName="text-3xl font-bold">
    //       Hello TailWind
    //     </h1>
    //   </section>
    //   <section classNameName={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    //     <h2 classNameName={utilStyles.headingLg}>Blog</h2>
    //     <ul classNameName={utilStyles.list}>
    //       {allPostsData.map(({ id, date, title }) => (
    //         <li classNameName={utilStyles.listItem} key={id}>
    //           <Link href={`/posts/${id}`}>{title}</Link>
    //           <br />
    //           <small classNameName={utilStyles.lightText}>
    //             <Date dateString={date} />
    //           </small>
    //         </li>
    //       ))}
    //     </ul>
    //   </section>
    // </Layout>
    <section>
      <section className="wrapper">
        <Header />
        <Hero />
        <Footer />
      </section>
    </section>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}