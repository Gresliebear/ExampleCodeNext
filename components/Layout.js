import styles from '../styles/Layout.module.css'
import { Navbar } from './Navbar'
import { Header } from './Header'
// we want this to wrap around my page component
export const Layout = ({children}) => {
  return (
    <> 
    <Navbar/> 
    <div className={styles.container}>
    <main className={styles.main}> 
        <Header />
        {children}
    </main>
    </div>
    </>
  )
}
