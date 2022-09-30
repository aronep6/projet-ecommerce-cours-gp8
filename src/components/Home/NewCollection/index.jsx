import './NewCollection.css';

import { useLocalbase, useService } from '../../../utils/hooks';
import { useEffect, useState } from 'react';

export default function NewCollection() {
  
  const { datasIsAvailable } = useLocalbase();

  const [menCol, setMenCol] = useState({ isFetched: false, datas: undefined });

  const service = useService();

  useEffect(() => {
    if (!datasIsAvailable) return;
    if (menCol.isFetched || !!menCol.datas) return;

    console.log("Fetching women collection products...");

    const fetchMenCollections = async () => {
      const men_products = await service.getMenCollections();
      console.log(men_products);
      setMenCol({ isFetched: true, datas: men_products });
    };

    fetchMenCollections();
  }, [datasIsAvailable]);

  return menCol.isFetched && <section className="new section" id="new">
      <h2 className="section-title">NEW COLLECTION</h2>

      <div className="new__container grid">
        <div className="new__mens">
          <img src="/img/new1.png" alt="" className="new__mens-img" />
          <h3 className="new__title">Mens Shoes</h3>
          <span className="new__preci">From $90</span>
          <a href="#" className="button-light">
            View Collection{' '}
            <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </div>

        <div className="new__sneaker">
          

          {
            menCol.datas.map((product) => <div key={product._id} className="new__sneaker-card">
              <img src={product.picture_1} alt="" className="new__sneaker-img" />
              <div className="new__sneaker-overlay">
                <a href="#" className="button">
                  Ajouter au panier
                </a>
              </div>
            </div>
            )
          }

        </div>
      </div>
    </section>
}
