import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articlesPass }) => {
    return (
    <div className={articleStyles.grid}>
      
      {articlesPass.articles.map((article) => (
        <ArticleItem article={article} />
      ))}

    </div>
  )
}

export default ArticleList