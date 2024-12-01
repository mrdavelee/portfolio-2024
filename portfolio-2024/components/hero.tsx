interface heroProps {
    title: string
}

export const Hero: React.FC<heroProps> = ({ title }) => {
    return (
        <div className="h-full w-10/12 mx-auto">
            <h1 className="pb-5 mb-8 tracking-tighter text-[3rem] sm:text-[7rem] md:text[10rem] xl:text-[14rem] text-center sm:text-left leading-[.8] font-black uppercase text-black">
                { title }
            </h1>
            <p className="text-2xl mb-20">
            I'm a front-end developer with a passion for user interfaces. I have a strong background in building award-winning frontend experiences, Proficient in HTML5, CSS3, and JavaScript, I'm always eager to learn new skills and stay on top of the latest technologies to ensure that every project I work on is the best it can be.
            </p>
        </div>
    )
}