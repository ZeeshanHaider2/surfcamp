import { fetchDataFromStrapi, fetchBlogArticles } from "@/utils/strapi.utils"

export default async function Page({params}) {
  const {article: slug } = params;

  const articles = await fetchBlogArticles();
  
  const article = articles.find((article)=> article.slug === slug);
  
  return(
    <main>
        <hi>{article.headline}</hi>
    </main>
  )
}

export async function generateStaticParams(){
    const articles = await fetchDataFromStrapi("blog-articles");
    return articles.map((article)=>({
        article:article.attributes.slug,
    }))
}