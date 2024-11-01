
import { useLocation } from "react-router-dom";
import { Body } from "../Types/apiTypes";



export function DetailPage() {
    const location = useLocation();

    const data: Body = location.state

    return (
        <>
        <div>            
            <h1>Title: {data.title}</h1>
            <img src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} alt="" />
            <p>Dimensions: {data.dimensions}</p>
            <p>Artist: {data.artist_titles}</p>
            

        </div>

        <button></button>

        </>

        
    )

}
