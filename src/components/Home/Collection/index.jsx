import './Collection.css';
import { useService } from '../../../utils/hooks';
import { useEffect, useState } from 'react';

export default function Collection() {
  
  const [collections, setCollections] = useState({ isFetched: false, datas: undefined });

  const service = useService();

  useEffect(() => {
    if (collections.isFetched || !!collections.datas) return;

    console.log("Fetching collection products...");

    const fetchFeatured = async () => {
      const featured = await service.getCollectionsProducts();
      const randomFeatured = featured.data.sort(() => 0.5 - Math.random()).slice(0, 3);
      setCollections({ isFetched: true, datas: randomFeatured });
    };

    fetchFeatured();
  }, [collections]);

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
