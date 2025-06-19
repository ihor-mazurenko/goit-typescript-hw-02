import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "gRjnStHFUjVJAfMH8Tc0lJZoxGGcb0G4t-J41Jn_WeE";

export interface Image {
    id: string;
    alt_description: string;
    urls: {
        small: string;
        regular: string;
    }
}

export interface ApiResponse {
    results: Image[];
    total: number;
    total_pages: number;
}

export interface FetchImagesResult {
    images: Image[];
    total: number;
}

export const fetchImages = async (query: string, currentPage:number):Promise<FetchImagesResult> => {
    const response = await axios.get<ApiResponse>("/search/photos", {
        params: {
            query: query,
            page: currentPage,
            per_page: 12,
        },
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
        },
    });
    return {
        total: response.data.total,
        images: response.data.results,
    };
};