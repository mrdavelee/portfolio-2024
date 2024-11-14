import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ArrowUp } from "lucide-react"
import ke from '../../public/img/kings_ely.png'
import sc from '../../public/img/st_chris.png'
import rs from '../../public/img/ryde_school.png'
import bs from '../../public/img/isb.png'
import Image from "next/image";
 
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

const sites = [
    {
      title: "St Chris School",
      description: "St Chris is a non-selective independent school in Letchworth Garden City for girls and boys aged 3-18 which offers an educational experience that is unmistakeably different.",
      uri: 'https://www.stchris.co.uk/',
      img: sc
    },
    {
      title: "Kings Ely School",
      description: "King's Ely is a cathedral school and now an all through co-educational fee-charging day and boarding school in the city of Ely in England.",
      uri: 'https://www.kingsely.org/',
      img: ke
    },
    {
      title: "Ryde School",
      description: "Ryde School with Upper Chine is a co-educational independent day and boarding school in Ryde, on the Isle of Wight.",
      uri: 'https://www.rydeschool.org.uk/',
      img: rs
    },
    {
      title: "Internation School of Bremen",
      description: "International School of Bremen is a private, co-educational, English-speaking school that was established in 1998 in Bremen, Germany",
      uri: 'https://www.isbremen.de/',
      img: bs
    },
  ]

  type CardProps = React.ComponentProps<typeof Card>

export default function Home({ className, ...props }: CardProps) {
  return (
    <>
    
      <div className="upper-wrapper bg-zesty">
        <header className=" w-3/4 mx-auto text-black flex justify-end py-14">

          <Header />
        </header>

        <Hero title="Ubiq Education"/>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 mx-auto w-3/4">
          {sites.map((site, index) => (

            <Card key={index} className={cn("w-[380px] border-none overflow-hidden rounded-3xl", className)} {...props}>
              <CardHeader>
                <Image src={ site.img } alt={ site.title }/>
              </CardHeader>
          
              <CardContent className="grid gap-4 p-6">
                <CardTitle>{ site.title }</CardTitle>

                <div className="mb-4 w-full items-start pb-4 last:mb-0 last:pb-0" >
                  
                  <div className="space-y-1 w-full">
                    <p className="text-sm font-medium leading-none">
                      {site.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {site.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className=" flex items-center space-x-4 rounded-md border  w-full">  
                  <Link href={ site.uri} target="_blank" className="flex p-4 justify-between w-full">
                    Visit site <ArrowUp className="rotate-45 p-1 flex justify-center items-center bg-zestHighlight text-white rounded-full hover:bg-zesty text-xl" />
                  </Link>
                </div>
              </CardFooter>
            </Card>

          ))}
        </div>


        
      
      </div>
      

    </>
  );
}
