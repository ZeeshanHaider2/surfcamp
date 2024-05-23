import { fetchDataFromStrapi, fetchBlogArticles } from "@/utils/strapi.utils"
import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";
import ArticleComponent from "@/app/_components/Blog/ArticleComponent";

export default async function Page({params}) {
  const {article: slug } = params;

  const articles = await fetchBlogArticles();
  
  const article = articles.find((article)=> article.slug === slug);
  
  return(
    <main>
        <ArticleIntro article={article} />
      <section className="article-section">
         <ArticleOverview article={article} /> 
         {article.articleContent.map((component)=>(
          <ArticleComponent key={component.id} component={component}/>
         ))}
      </section>
        
    </main>
  )
}

export async function generateStaticParams(){
    const articles = await fetchDataFromStrapi("blog-articles");
    return articles.map((article)=>({
        article:article.attributes.slug,
    }))
}

export const  revalidate = 300;