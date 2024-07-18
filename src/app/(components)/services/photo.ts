import { StaticImageData } from "next/image"
import photo1 from "./photo/photo1.jpg"
import photo2 from "./photo/photo2.jpg"
import photo3 from "./photo/photo3.jpg"
import photo4 from "./photo/photo4.jpg"
import photo5 from "./photo/photo5.jpg"

export type PhotoData={
    id:number,
    name:string,
    src:StaticImageData,
    photographer?:string,
    location?:string
}

export const photoData:PhotoData[]=[
    {id:1,name:"First Sushi",src:photo1,photographer:"mgmg",location:"yangon"},
    {id:2,name:"Second Sushi",src:photo2,photographer:"aungaung",location:"mandalay"},
    {id:3,name:"Third Sushi",src:photo3,photographer:"kyawkyaw",location:"sagging"},
    {id:4,name:"fourth Sushi",src:photo4,photographer:"susu",location:"manywa"},
    {id:5,name:"Fifth Sushi",src:photo5,photographer:"ayeaye",location:"shwebo"},
]