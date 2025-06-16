import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "gRjnStHFUjVJAfMH8Tc0lJZoxGGcb0G4t-J41Jn_WeE";

export const fetchImages = async (query, currentPage) => {
    const response = await axios.get("/search/photos", {
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