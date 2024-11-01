import { useFetchData } from "../Hooks/useFetch"
import { Card } from "../Components/Card"



export function MainPage() {
    const [data, isLoading] = useFetchData("https://api.artic.edu/api/v1/artworks")
    console.log(data)

    return(
        <>
        {isLoading? (<p>Is loading ...</p>):

        (
            <ul>
                <div>
                    {data && data.map((item)=>(
                        <Card key={item.id} title={item.title} image={item.image_id} allData={item}></Card>
                    ))}
                </div>
            </ul>
        )       
        
        }
        </>
    )

}