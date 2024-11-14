import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import cv from "../public/docs/David_Lee_CV_2024.pdf"
import img from './imgs/abstract.avif'
import { SmallHeader } from "@/components/small-header";
import { ListItem } from "@/components/list-item";
import { HoverButton } from "@/components/hover-button";



export default function Home() {
  return (
    <>
    
      <div className="upper-wrapper bg-zesty">
        <header className=" w-3/4 mx-auto text-black flex justify-center sm:justify-end py-14">

          <Header />
        </header>

        <Hero title="Digitise Ideas"/>

        <div className=" pb-5 w-3/4 mx-auto flex flex-row gap-x-2 items-center mb-8">
          {/* <HoverButton title="Download my CV" link={ cv } buttonTitle="Download CV" /> */}

          <HoverButton title="Frontend Developer crafting innovative web solutions at UBIQ" link="https://www.linkedin.com/in/davidleedev/" buttonTitle="Open to Work - hover me" />
          <span className="w-full h-0.5 bg-zestHighlight"/>
        </div>

        <Image src={img} alt='abstract' className="rounded-[3rem] w-3/4 mx-auto pb-8"/>
      
      </div>
      
      <div className="lower-wrapper bg-offBlack">
        <div className="w-3/4 mx-auto grid grid-cols-2">
          <div className="left flex items-start flex-col">

            <SmallHeader title="My Skills"/>

            <p className="text-darkGrey">Everyone of us loves something different. So, explore the world through the lens of our visual capabilities and find what you love</p>
          </div>

          <div className="right flex items-center justify-end">

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Button className="text-darkWhite border-darkWhite" variant="outline">Development</Button>
              <Button className="text-darkWhite border-darkWhite" variant="outline">SEO</Button>
              <Button className="text-darkWhite border-darkWhite" variant="outline">Marketing</Button>
            </div>
          </div>

          {/* <div className="list">
            <div>
              <ListItem photo={ img } title="UI/UX Design"/>
            </div>
            <div>
              <ListItem photo={ img } title="Web Design"/>
            </div>
            <div>
              <ListItem photo={ img } title="Brand Design"/>
            </div>
            <div>
              <ListItem photo={ img } title="Graphic Design"/>
            </div>
          </div> */}

        </div>
      </div>

    </>
  );
}
