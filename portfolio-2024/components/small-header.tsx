interface headerProps {
    title: string
}

export const SmallHeader: React.FC<headerProps> = ({ title }) => {

    return (
        <h2 className="text-darkWhite uppercase text-[5rem] tracking-tighter font-black"> { title } </h2>
    )
}