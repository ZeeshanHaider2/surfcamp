import { extractImageUrl } from "@/utils/strapi.utils"

const LandscapeImage = ({imageData}) => {
    const { imageCaption, image } = imageData;
    return (
        <div className="article-image">
           <img src={extractImageUrl(image)} atl=""/>
           {imageData.imageCaption && (
            <p className="copy article-image__caption copy-small">
                {imageCaption}
                </p>
           )}
        </div>
    )
}

export default LandscapeImage