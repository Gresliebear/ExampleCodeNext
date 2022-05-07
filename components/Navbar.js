import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

// we want to bring this to our layout and we want these on everypage
export const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
    <ul> 
        <li> 
            <Link href='/'> Home </Link>
        </li>
        <li> 
            <Link href='/about'> About </Link>
        </li>
        <li> 
            <Link href='/'> Home </Link>
        </li>
    </ul>
    </nav>
  )
}
