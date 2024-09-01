import { useParams } from "react-router-dom"
import articles from "./Article-Content"


const ArticlePage =()=>{
    const params=useParams()
    const {articleId}=params
    const article=articles.find(article=>article.name===articleId)
    return(
        <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph,i)=>(
        <p key={i}>{paragraph}</p>
      ))}
      </>
    )
    
}
export default ArticlePage