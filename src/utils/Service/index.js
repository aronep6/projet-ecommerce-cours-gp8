import axios from 'axios';
import response from './apiResponse';

const PRODUCTS_BACKEND_URL = 'https://api-ecommerce-doums85.vercel.app/api/products?sub_category=Sneakers';

const getStaticData = async () => {
    return response;
};

class Core {
    useCloudURL = async () => {
        try {
            // const response = await axios.get(PRODUCTS_BACKEND_URL);
            const response = await getStaticData();

            if (response.status === 200 || true) {
                return { success: true, data: response.data.data };
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
        return api_response;
    }

    async getFeaturedProducts() {
        const api_response = await this.useCloudURL();
        return api_response;
    }

    async getCollectionsFromVendor(vendor) {
        const api_response = await this.useCloudURL();
        
        console.log(api_response);
    };

};

export default Service;