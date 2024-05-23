import ArticleHeadline from "./ArticleHeadline";
import ImageTextComponent from "./ImageTextComponent";

const ArticleComponent = ({ component }) => {
   
    const componentType = component.__component.split("blog-article.")[1];
    switch (componentType) {
      case "headline-a":
        return <h1><ArticleHeadline headline={component}/></h1> 
      case "paragraphwith-image":
        //should be paragraphwith-image
        return <h1><ImageTextComponent component={component}/></h1>
      case "paragraph":
        return <h1>paragraph component</h1>
      case "landscape-image":
      return <h1>landscape image</h1>
      default:
        return <h1>Component not found</h1>;
    
  }
}

export default ArticleComponent