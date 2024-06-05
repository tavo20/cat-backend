const axios = require('axios');

export const getAllBreeds = async () => {
    try {
        const API_CAT_URL = process.env.API_CAT_URL;
        const KEY_CAT_API_SECRET = process.env.KEY_CAT_API_SECRET;

        console.log('API_CAT_URL', API_CAT_URL);

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