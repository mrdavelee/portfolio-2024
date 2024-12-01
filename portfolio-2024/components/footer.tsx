import ContactForm from "@/components/contact";


export function Footer() {
    return (
        <div className="h-full w-full  bg-offBlack mx-auto py-10 md:py-20">
            <h1 className="w-10/12 text-zesty mx-auto mb-8 tracking-tighter text-[3rem] sm:text-[7rem] md:text[10rem] xl:text-[12rem] text-center leading-[.8] font-black uppercase">
                Let's Connect
            </h1>
            <ContactForm />

        </div>
    )
}
