import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ArrowUp } from "lucide-react"
import celebrity from '../../public/img/celebrity.png'
import notes from '../../public/img/notes.png'
import wars from '../../public/img/wars.png'
import Image from "next/image";
 

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

const sites = [
    {
      title: "Star Wars Character search",
      description: "As an example of my React and Next.js skills I created this functional DB search for Star Wars characters. ",
      uri: 'https://swapiexample.netlify.app/',
      img: wars
    },
    {
      title: "Celebrity Cruises spoof",
      description: "I built this using Next.js to wind up a friend",
      uri: 'https://verdant-cannoli-55ca9e.netlify.app/',
      img: celebrity
    },
    {
      title: "Notes App",
      description: "This is a fully functional Notes app, with search facility built as part of a tutorial.",
      uri: 'https://thunderous-kashata-4cce4f.netlify.app/',
      img: notes
    },
  ]


export default function Home() {
  return (
    <>
    
    <div className="upper-wrapper bg-zesty pb-20">
        <header className=" w-10/12 mx-auto text-black flex justify-end py-14">

          <Header />
        </header>

        <div data-vaul-drawer-wrapper="">
        <Hero title="Personal Projects"/>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 mx-auto w-10/12">


          {sites.map((site, index) => (
            <Drawer key={index}>
              <DrawerTrigger asChild>
                <Card  className="max-w-sm border-none overflow-hidden rounded-[40px] shadow-md cursor-pointer relative ">
                  <CardHeader>
                    <Image className="shadow-lg" src={ site.img } alt={ site.title }/>
                  </CardHeader>
              
                  <CardContent className="grid gap-4 px-6 pt-8 pb-10">
                    <CardTitle className="text-3xl sm:text-4xl md:text-6xl pb-20 font-bold tracking-tighter leading-[.8]">{ site.title }</CardTitle>

                    
                  </CardContent>
                  <CardFooter className="absolute bottom-0 right-0">
                    <ArrowUp className="rotate-45 p-1 flex justify-center items-center bg-zestHighlight text-white rounded-full w-20 h-20" />
                  </CardFooter>
                  
                </Card>
              </DrawerTrigger>

                <DrawerTitle className="hidden">
                  {site.title}
                </DrawerTitle>
              
              <DrawerContent className="w-full mx-auto max-w-4xl pb-10">

                <div className="w-10/12 mx-auto">

                  <div className="mb-4 w-full items-start pb-4 last:mb-0 last:pb-0" >
                          
                    <div className="space-y-1 w-full">
                    <Image className="shadow-lg mb-6 md:mb-16 mt-6" src={ site.img } alt={ site.title }/>
                      <h2 className="text-2xl pb-4 font-medium leading-none">
                        {site.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {site.description}
                      </p>
                    </div>
                  </div>

                  <div className=" flex items-center space-x-4 rounded-md border  w-full">  
                    <Link href={ site.uri} target="_blank" className="flex p-4 justify-between w-full">
                      Visit site <ArrowUp className="rotate-45 p-1 flex justify-center items-center bg-zestHighlight text-white rounded-full hover:bg-zesty text-xl" />
                    </Link>
                  </div>
                </div>


              </DrawerContent>
            </Drawer>


))}
        </div>


        
      
      </div>
      
      </div>
      

    </>
  );
}
