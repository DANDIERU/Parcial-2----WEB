export interface Welcome {
    pictures: Body [];
}

export interface Body {
    image_id: string
    id: number,
    api_model: string,
    api_link: string,
    is_boosted: false,
    title:string,
    dimensions: string,
    artist_titles: string
    dimensions_detail: Dimensions    
}

export interface Dimensions {
    width: 134,
    height: 152,
}



