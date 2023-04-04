import { RouterTestingModule } from '@angular/router/testing';
export interface Game{
    background_image: string;
    id:number;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailers>
}
export interface APIResponse<T> {
    results: Array<T>;
}
interface Genre {
    name: string;
}
interface Rating {
    id: number; 
    count: number;
    title: string;
}
interface ParentPlatform {
    name: string;
    slug: string;
    id:number;
}
interface Publishers {
    name: string;
}
interface Trailers {
    image: string
}
interface Screenshots{
    data: {
        max: string;
    };
}