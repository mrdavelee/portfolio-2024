import { StaticImageData } from "next/image"


interface listProps {
    photo: string | StaticImageData,
    title: string
}

export const ListItem: React.FC<listProps> = ({ title }) => {

    return (
        <div>
            <h3>{ title }</h3>

        </div>
    )

}