
import { useLocation } from "react-router-dom";
import { Body } from "../Types/apiTypes";
import { useNavigate } from "react-router-dom";



export function DetailPage() {
    const location = useLocation();

    const data: Body = location.state
    const navigation = useNavigate();

    return (
        <>
        <div>            
            <h1>Title: {data.title}</h1>
            <img src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} alt="" />
            <p>Dimensions: {data.dimensions}</p>
            <p>Artist: {data.artist_titles}</p>
            

        </div>

        <button onClick={() => {navigation("./detail" , )}}></button>

        </>

        
    )

}
