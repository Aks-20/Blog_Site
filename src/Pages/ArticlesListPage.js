import articles from "./Article-Content"
import ArticleList from "../Components/ArticleList"


const ArticlesListPage =()=>{
    return(
        <>
       <h1>
        Articles
       </h1>
      <ArticleList articles={articles}/>
       </>
    )
}
export default ArticlesListPage