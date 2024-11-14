
  import { buttonVariants } from "@/components/ui/button"
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

  import { Linkedin } from 'lucide-react';
import Link from "next/link";

interface hoverButtonProps {
    link: string,
    buttonTitle: string,
    title: string,
}

export const HoverButton: React.FC<hoverButtonProps> = ({ link, buttonTitle, title }) => {

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Link target="blank" href={link} className={buttonVariants({ variant: "outline" })}>{ buttonTitle }</Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Linkedin size={50}/>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{ title }</h4>
                        <a className="text-sm" href={link}>
                        Linkedin
                        </a>
            
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )

}