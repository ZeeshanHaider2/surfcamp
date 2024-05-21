import React from 'react'
import ReactMarkdown from "react-markdown";

const infoBlock = ({data}) => {
  //console.log(data);

    const { headline, text, showimageRight, imageSrc, button } = data;
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
         {button}
         
     </div>  
    </div>
  )
}

export default infoBlock
