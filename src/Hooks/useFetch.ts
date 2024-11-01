import { Welcome } from "../Types/apiTypes";
import { useEffect, useState } from "react";


export const useFetchData = (url:string) =>{
    const [data, setData]= useState<Welcome>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() =>{
        const usefetch = async() => {
            setIsLoading(true)
            try {
                const response = await fetch(url);
                const data = await response.json()
                
                setData(data)
                setIsLoading(false)
            }catch(error){
                console.log(error)
            }           
        }
        usefetch();        

    },[url])    

    return [data, isLoading]
    
}