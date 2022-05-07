import { Layout } from '../components/Layout'
import '../styles/globals.css'

// this wraps around all my page components
// we could wrap a layout component  
function MyApp({ Component, pageProps }) {
  
  return (
  <Layout> 
  <Component {...pageProps} />
  </Layout>
  
  )
}

export default MyApp
