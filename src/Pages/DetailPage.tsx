
import { useLocation } from "react-router-dom";
import { Body } from "../Types/apiTypes";



export function DetailPage() {
    const location = useLocation();

    const data: Body = location.state

    return (
        <>
        <div>
            <img src={data.image_id} alt="" />
            <h1>Title: {data.title}</h1>
            <p></p>
            

        </div>

        <button></button>

        </>

        
    )

}
