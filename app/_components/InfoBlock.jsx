import React from 'react'
import ReactMarkdown from "react-markdown";
const infoBlock = ({data}) => {
    const { headline, text, showimageRight, imageSrc } = data;
    //console.log(data);
  return (
  
    <div className={`info ${showimageRight ? "info--reversed" : ""}`}>
        <img
          className='info__image'
          src={imageSrc || "/info--blocks/rectangle.png"}
           alt=""
           />
     <div className='info__text'>
        <h2 className='info__headline'>{headline}</h2>
         <ReactMarkdown className='copy'>{text}</ReactMarkdown>
     </div>  
    </div>
  )
}

export default infoBlock
