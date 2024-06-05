const axios = require('axios');

export const getAllBreeds = async () => {
    try {
        const API_CAT_URL = process.env.API_CAT_URL;
        const KEY_CAT_API_SECRET = process.env.KEY_CAT_API_SECRET;

        const response = await axios.get(`${API_CAT_URL}v1/breeds`, {
            headers: {
                'x-api-key': KEY_CAT_API_SECRET
            }
        });

        if(response.status !== 200) {
            throw new Error(`Error getting breeds from respository file ID: 234FTYU2F2T3UDTY2 API. Status: ${response.status}, Message: ${response.statusText}, DATA: ${response.data}`);
        }

        return response.data;


    } catch (error: any) {
        console.error(error.message);
        throw new Error(error.message);
        
    }
}

export const getBreedById = async (breed_id: string) => {
    try {
        const API_CAT_URL = process.env.API_CAT_URL;
        const KEY_CAT_API_SECRET = process.env.KEY_CAT_API_SECRET;

        const response = await axios.get(`${API_CAT_URL}v1/breeds/${breed_id}`, {
            headers: {
                'x-api-key': KEY_CAT_API_SECRET
            }
        });

        if(response.status !== 200) {
            throw new Error(`Error getting breeds from respository file ID: 24BS34J32BJ2V33VADWPW API. Status: ${response.status}, Message: ${response.statusText}, DATA: ${response.data}`);
        }

        return response.data;

    } catch (error: any) {
        console.error(error.message);
        throw new Error(error.message);
    }
}


export const getBySearch = async (search: string) => {
    try {
        const API_CAT_URL = process.env.API_CAT_URL;
        const KEY_CAT_API_SECRET = process.env.KEY_CAT_API_SECRET;

        const response = await axios.get(`${API_CAT_URL}v1/breeds/search?q=${search}&attach_image=1}`, {
            headers: {
                'x-api-key': KEY_CAT_API_SECRET
            }
        });

        if(response.status !== 200) {
            throw new Error(`Error getting breeds by search string from respository file ID: 6S8H73IBMBDO0EDG246TYV3 API. Status: ${response.status}, Message: ${response.statusText}, DATA: ${response.data}`);
        }

        return response.data;

    } catch (error: any) {
        console.error(error.message);
        throw new Error(error.message);
    }
}

export const getImagesById = async (image_id: string) => {
    try {
        const API_CAT_URL = process.env.API_CAT_URL;
        const KEY_CAT_API_SECRET = process.env.KEY_CAT_API_SECRET;

        const response = await axios.get(`${API_CAT_URL}v1/images/${image_id}`, {
            headers: {
                'x-api-key': KEY_CAT_API_SECRET
            }
        });

        if(response.status !== 200) {
            throw new Error(`Error getting images from respository file ID: 7DSD8F47SBLPW578EBVCE API. Status: ${response.status}, Message: ${response.statusText}, DATA: ${response.data}`);
        }

        return response.data;
    } catch (error: any) {
        console.error(error.message);
        throw new Error(error.message);
    }
}