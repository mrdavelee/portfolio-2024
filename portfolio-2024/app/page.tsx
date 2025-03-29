import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SmallHeader } from "@/components/small-header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <>
    
      <div className="upper-wrapper bg-zesty">
        <header className=" w-10/12 mx-auto text-black flex justify-end py-14">

          <Header />
        </header>

        <Hero title="Let's Create" para="I&apos;m a front-end developer with a passion for user interfaces. I have a strong background in building award-winning frontend experiences, Proficient in HTML5, CSS3, and JavaScript, I&apos;m always eager to learn new skills and stay on top of the latest technologies to ensure that every project I work on is the best it can be."/>

        <div className=" pb-5 w-10/12 mx-auto flex flex-col sm:flex-row gap-2 justify-center md:justify-start items-center mb-8">
          <Button variant="outline" title="Download my CV">
            <Link href="/docs/David_Lee_CV.pdf">
              Download my CV
            </Link>
          </Button>

          <Button variant="outline" title="Link to my Linkedin">
            <Link className="flex items-center justify-between"  href="/https://www.linkedin.com/in/davidleedev/">
            <Linkedin size={60} className="mr-2"/>
              Linkedin
            </Link>
          </Button>

          <Button variant="outline" title="Link to my Github">
            <Link className="flex items-center justify-between" href="https://github.com/mrdavelee">
            <Github size={60} className="mr-2"/>
              Github
            </Link>
          </Button>

          <span className="hidden md:block w-full h-0.5 bg-zestHighlight"/>
          
        </div>

        <div className="w-10/12 mx-auto pb-10">
          <h2 className="pb-5 mb-10 tracking-tighter text-[3rem] sm:text-[5rem] md:text[7rem] xl:text-[10rem] text-center sm:text-left leading-[.8] font-black uppercase text-black">
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
              <Badge variant='zesty'>JavaScript</Badge>
              <Badge variant='zesty'>CSS</Badge>
              <Badge variant='zesty'>HTML</Badge>
              <Badge variant='zesty'>Git</Badge>
              <Badge variant='zesty'>SCSS</Badge>
              <Badge variant='zesty'>React</Badge>
              <Badge variant='zesty'>JQuery</Badge>
              <Badge variant='zesty'>NextJS</Badge>
              <Badge variant='zesty'>Tailwind</Badge>
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
