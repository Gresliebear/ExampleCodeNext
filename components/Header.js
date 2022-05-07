import headerStyles from '../styles/Header.module.css'

export const Header = () => {
  return (
    <div>

        <h1 className={headerStyles.title}> 
            <span> Leslie M. Wubbel </span> Blog
        </h1>
        <p className={headerStyles.description}> For insightfull opinions on biotechnology, art, politics, crypto, investing, and I guess life. </p> 

    </div>
  )
}
