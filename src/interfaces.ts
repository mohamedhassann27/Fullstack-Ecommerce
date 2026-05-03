export interface IProduct{
    id: string
    title: string,
    description: string,
    thumbnail: string,
    price: number,
    images: string[],
    quantity: number,
    category: string,
    rating: number,
    reviews: number
    created_at: string
}

export interface IUser{
    id: number,
    userName: string,
    user_metadata:{
        email: string,
        userName: string
    }
}

export interface ICategory{
    id: number,
    name: string,
    img: string
}