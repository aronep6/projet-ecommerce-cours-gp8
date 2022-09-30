import './Collection.css';
import { useLocalbase, useService } from '../../../utils/hooks';
import { useEffect, useState } from 'react';

const famous_vendors = ["Nike", "Adidas"];

export default function Collection() {
  const { datasIsAvailable } = useLocalbase();

  const [collections, setCollections] = useState({ isFetched: false, datas: undefined });

  const service = useService();

  useEffect(() => {
    if (!datasIsAvailable) return;
    if (collections.isFetched || !!collections.datas) return;

    console.log("Fetching collection products...");

    const fetchCollections = async () => {
      famous_vendors.forEach(async (vendor) => {
        const collection_of_vendor = await service.getCollectionsFromVendor(vendor, true);
        console.log("Collection of the vendor", collection_of_vendor);
        setCollections({ isFetched: false, datas: { ...collections.datas, [vendor.toLocaleLowerCase()]: collection_of_vendor.data } });
      });
    };

    fetchCollections();
  }, [datasIsAvailable]);

  return (
    <section className="collection section">
      <div className="collection__container grid">
        <div className="collection__card">
          <div className="collection__data">
            <h3 className="collection__name">Nike</h3>
            <p className="collection__description">New collection 2022</p>
            <a href="" className="button-light">
              Buy now <i className="bx bx-right-arrow-alt button-icon"></i>
            </a>
          </div>

          <img src="/img/collection1.png" alt="" className="collection__img" />
        </div>

        <div className="collection__card">
          <div className="collection__data">
            <h3 className="collection__name">Addidas</h3>
            <p className="collection__description">New collection 2022</p>
            <a href="" className="button-light">
              Buy now <i className="bx bx-right-arrow-alt button-icon"></i>
            </a>
          </div>

          <img src="/img/collection2.png" alt="" className="collection__img" />
        </div>
      </div>
    </section>
  );
}
