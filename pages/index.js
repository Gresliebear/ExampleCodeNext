import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
// No 3rd party routing system thank god
// simply put pages in 

// to do list for nested routes, specific folder structure 



export default function Home(articles) {

  console.log(articles)
  return (
    <div>

    <Head> 
      <title> LeslieWubbel Blog</title>
      <meta name='keywords' content='web 
      development, programming, stocks, investing, biotechnology'/>
    </Head>

      <ArticleList articlesPass={articles}/>
      <h1> Welcome to Next</h1>
    </div>
  )
}
// Mango Peach Applesauce

// DataFetching 
// 3 method to fetch getStaticProps() getServerSideProps() getStaticPath

// getStaticProps fetch at build time
export const getStaticProps = async () => {
  // fake rest API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return { 
    props: {
      articles,
    },
  }

}

// getServerSideProps fetch data on every request slower

// getStaticPath to generate dynamically generate paths based on the data were fetching.

