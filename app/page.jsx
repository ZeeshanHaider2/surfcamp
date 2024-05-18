import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";

export default function Home() {
  const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  )

  const infoBlockData={
    headline:"the experience.",
    text:(
      <p className="copy">
        bbdeuhduedubdebdvhevhevhevchevchevehcve che ce ce hevhevcev
      </p>
    ),
    button:<button className="btn btn-turquoise">Book Now</button>,
    reversed: false,
  }
  return (
  <main>
    <HeroSection headline={heroHeadline}/>
    <InfoBlock data={infoBlockData}/>
    <InfoBlock data={{...infoBlockData, reversed: true}}/>
  </main>
  )
}
