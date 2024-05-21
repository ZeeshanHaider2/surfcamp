import HighlightArticle from "../_components/Blog/HighlightArticle"
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter"

const page = () => {
  const HighlightArticleData = {
    headline:"3 tips for a super fast takeoff",
    excerpt: (
      <>
      The experienceContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
      </>
    ),
    slug:"takeoff",
    featuredImage:"/assets/hero-experience.png",
  }
  return (
   <main className="blog-page">
       <HighlightArticle data={HighlightArticleData}/>
       <SubscribeToNewsletter/>
   </main>
    
  )
}

export default page