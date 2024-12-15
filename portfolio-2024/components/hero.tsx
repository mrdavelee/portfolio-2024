interface heroProps {
    title: string,
    para?: string
}

export const Hero: React.FC<heroProps> = ({ title, para }) => {
    return (
        <div className="h-full w-10/12 mx-auto">
            <h1 className="pb-5 mb-8 tracking-tighter text-[3rem] sm:text-[7rem] md:text[10rem] xl:text-[14rem] text-center sm:text-left leading-[.8] font-black uppercase text-black">
                { title }
            </h1>
            <p className="text-2xl mb-20">
                { para }
            </p>
        </div>
    )
}