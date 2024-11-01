import { useNavigate } from "react-router-dom";

export interface CardProps {
    image: string;
    title: string;
    allData: Body;
}


export function Card({image,title, allData}: CardProps){

    const navigation = useNavigate()

    return(
        <div className="main-card" onClick={() => {navigation("./detail" , {state: allData})}}>
            <img src={`https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`} alt="image" />

            <h1>{title}</h1>
        </div>

        
    )

}

