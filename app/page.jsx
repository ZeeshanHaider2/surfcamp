import axios from "axios";
import Image from 'next/image';
import HeroSection from './_components/HeroSection';
import InfoBlock from './_components/InfoBlock';
import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";

export default async function Home() {
  //const response = await axios.get(
   // "http://127.0.0.1:1337/api/infoblocks-landing?populate=deep");
   //console.log(response.data.data.attributes.info_blocks.data);
   const data = await fetchDataFromStrapi("infoblocks-landing?populate=deep");
   const infoBlockData = processInfoBlocks(data);
   console.log(infoBlockData);
   
   const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  )

  // const infoBlockData={
  //   headline:'the experience.',
  //   text:(
  //     <p className='copy'>
  //       Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  //     </p>
  //   ),
  //   button: <button className='btn btn--medium btn--turquoise'>Book Now</button>,
  //   reversed: false,
  // }
  return (
  <main>
    <HeroSection headline={heroHeadline}/>
    {/*<InfoBlock data={infoBlockData}/>
    <InfoBlock data={{...infoBlockData, reversed: true}}/>*/}
  </main>
  )
}
