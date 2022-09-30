import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { UserProfile, Login, Registration } from './pages/User';
import { Men, Detail } from './pages/Collection';

// Localbase imports
import Localbase from 'localbase';
import LocalbaseContext from "./utils/Localbase/context";

// Service imports
import ServiceContext from "./utils/Service/context";
import Service from "./utils/Service";

function App() {
  const db = new Localbase("shop"); // Shop database, with sections matching collections
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (isFetched) return console.log("Datas already fetched, skipping...");

    const getProducts = async () => {
      try {
        console.log("Getting products ...");
        const current_products = await db.collection("products").limit(20).get();

        if (current_products.length === 0) {
          const service = new Service();
          const products = await service.getAllProducts();
  
          db.collection("products").set(products?.data);
        } else {
          console.log("Products retrieved from localbase");
        }
      } catch (error) {
        console.log("Error getting products", error);
      } finally {
        setIsFetched(true);
      }
    };

    getProducts();
  }, []);

  return (
    <LocalbaseContext.Provider value={{ db, datasIsAvailable: isFetched }}>
      <ServiceContext.Provider value={ new Service() }>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* User Profile */}
            <Route path="/user">
              <Route index element={<UserProfile />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Registration />} />
            </Route>
            {/* Shops */}
            <Route path="/collection">
              <Route index element={<Men />} />
              <Route path=":id" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ServiceContext.Provider>
    </LocalbaseContext.Provider>
  );
}

export default App;
