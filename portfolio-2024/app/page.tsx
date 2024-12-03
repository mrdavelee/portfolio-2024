import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SmallHeader } from "@/components/small-header";
import { HoverButton } from "@/components/hover-button";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
    
      <div className="upper-wrapper bg-zesty">
        <header className=" w-10/12 mx-auto text-black flex justify-center sm:justify-end py-14">

          <Header />
        </header>

        <Hero title="Digitise Ideas"/>

        <div className=" pb-5 w-10/12 mx-auto flex flex-col sm:flex-row gap-2 justify-center md:justify-start items-center mb-8">
          <Button variant="outline" title="Download my CV">
            <Link href="/docs/David_Lee_CV_2024.pdf">
              Download my CV
            </Link>
          </Button>

          <HoverButton title="Frontend Developer crafting innovative web solutions at UBIQ" link="https://www.linkedin.com/in/davidleedev/" buttonTitle="Open to Work - hover me" />
          <span className="hidden md:block w-full h-0.5 bg-zestHighlight"/>
        </div>

        <div className="w-10/12 mx-auto pb-10">
          <h2 className="text-offBlack uppercase text-[5rem] tracking-tighter font-black mb-10">
          My Past Work
          </h2>

          <div className=" gap-x-4 gap-y-10 flex flex-col md:flex-row justify-between items-center">
            <Button variant="image" size="full">
              <Link href="/ubiq">
                <Image src="/UBIQ.webp" alt="ubiq" width="500" height="240"/>
              </Link>
            </Button>

            <Button variant="image" size="full">
              <Link href="/proagrica">
                <Image src="/proagrica.png" alt="proagrica" width="500" height="240"/>
              </Link>
            </Button>

            <Button variant="image" size="full">
              <Link href="/abacus">
                <Image src="/logo.png" alt="abacus" width="500" height="240"/>
              </Link>
            </Button>
          </div>
        </div>

        {/* <Image src={img} alt='abstract' className="rounded-[3rem] w-10/12 mx-auto pb-8"/> */}
      
      </div>
      
      <div className="lower-wrapper bg-offBlack py-10">
        <div className="w-10/12 mx-auto grid gap-10 md:gap-5 grid-cols-1 md:grid-cols-2">
          <div className="left flex items-center md:items-start flex-col ">

            <SmallHeader title="My Skills"/>

            <p className="text-white">Get in touch to see what we can create together</p>
          </div>

          <div className="right flex items-center justify-end">

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Badge variant='zesty'>Development</Badge>
              <Badge variant='zesty'>SEO</Badge>
              <Badge variant='zesty'>Marketing</Badge>
              <Badge variant='zesty'>JavaScript</Badge>
              <Badge variant='zesty'>CSS</Badge>
              <Badge variant='zesty'>HTML</Badge>
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

      <Footer/>
    </>
  );
}
