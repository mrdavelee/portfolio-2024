import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ArrowUp } from "lucide-react"
import itchy from '../../public/img/itchy.png'
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
      title: "Itchy Pet Awareness Month",
      description: "",
      uri: 'https://www.itchypetawarenessmonth.com/',
      img: itchy
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

        <Hero title="Proagrica"/>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 mx-auto w-3/4">
          {sites.map((site, index) => (

            <Card key={index} className={cn("w-[380px] border-none overflow-hidden rounded-3xl", className)} {...props}>
              <CardHeader>
                <Image src={ site.img } alt={ site.title }/>
              </CardHeader>
          
              <CardContent className="grid gap-4 p-6">
                <CardTitle>{ site.title }</CardTitle>

                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0" >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
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
