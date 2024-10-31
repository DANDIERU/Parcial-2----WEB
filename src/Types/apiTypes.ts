export interface Welcome {
    pictures: Result [];
}

export interface Result {
    image_id: string
    id: number,
    api_model: string,
    api_link: string,
    is_boosted: false,
    title:string,
    dimensions: string,
    artist_titles: string    
}



