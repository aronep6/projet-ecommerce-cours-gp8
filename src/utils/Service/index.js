import axios from 'axios';
import Localbase from 'localbase';
import response from './apiResponse';

const db = new Localbase("shop");
const PRODUCTS_BACKEND_URL = 'https://api-ecommerce-doums85.vercel.app/api/products?sub_category=Sneakers';

const getStaticData = async () => {
    return response;
};

// ----------------------------------------------------

class Core {
    constructor() {
        this.db = db; // Ref. to localbase
    }

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

    async getAllProducts() {
        const api_response = await this.useCloudURL();
        return api_response;
    }

    async getFeaturedProducts() {
        const api_response = await this.useCloudURL();
        return api_response;
    }

    async getCollectionsFromVendor(in_vendor, autoDBSavingByVendor = true) {
        const vendor = in_vendor.toLowerCase();

        const response = await this.db.collection("products").limit(40).get();
        const collections = response.filter((product) => product.brand.toLowerCase() === vendor);

        // Saving to matching vendor collection
        if (autoDBSavingByVendor) {
            await this.db.collection("collections").doc(`${vendor}`).set({ collections });
        };

        console.log(`Products from ${vendor} : `, collections);
        return collections;  
    };

    async getWomenCollections() {
        const response = await this.db.collection("products").limit(40).get();
        const collections = response.filter((product) => product.genre.toLowerCase().includes("women"));

        // Savng to "Women" specific collection
        await this.db.collection("women").set(collections);
        return collections;
    };

};

export default Service;