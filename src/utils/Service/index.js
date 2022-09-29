import axios from 'axios';

const PRODUCTS_BACKEND_URL = 'https://api-ecommerce-doums85.vercel.app/api/products?sub_category=Sneakers';

class Core {
    useCloudURL = async () => {
        try {
            const response = await axios.get(PRODUCTS_BACKEND_URL);

            if (response.status === 200) {
                return response.data;
            } else throw "Erreur lors de la récupération des données";
        } catch (error) {
            return { success: false, message: `${error}` };
        }
    };
};

class Service extends Core {
    constructor() {
        super();
    }

    getProducts() {
        const api_response = this.useCloudURL();
        console.log(api_response);
        return api_response;
    }
};

export default Service;