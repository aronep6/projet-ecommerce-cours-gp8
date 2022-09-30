import './WomenSection.css';
import { useLocalbase, useService } from '../../../utils/hooks';
import { useEffect, useState } from 'react';

export default function Women() {
  const { datasIsAvailable } = useLocalbase();

  const [womenCol, setWomenCol] = useState({ isFetched: false, datas: undefined });

  const service = useService();

  useEffect(() => {
    if (!datasIsAvailable) return;
    if (womenCol.isFetched || !!womenCol.datas) return;

    console.log("Fetching women collection products...");

    const fetchWomenCollections = async () => {
      const women_products = await service.getWomenCollections();
      console.log(women_products);
      setWomenCol({ isFetched: true, datas: women_products });
    };

    fetchWomenCollections();
  }, [datasIsAvailable]);

  return womenCol.isFetched && <section className="women section" id="women">
      <h2 className="section-title">WOMEN SNEAKERS</h2>

      <div className="women__container grid">

        {
          womenCol.datas.map((product, index) => <article className="sneaker" key={index}>
              { product?.Promo !== "" && <div className="sneaker__sale">En solde</div> }
              <img src={`${product.picture_1}`} alt="" className="sneaker__img" />
              <span className="sneaker__name">{product?.firme} { product?.name }</span>
              <span className="sneaker__preci">{ product?.price } €</span>
              <a href="#" className="button-light">
                Ajouter au panier <i className="bx bx-right-arrow-alt button-icon"></i>
              </a>
            </article>
          )
        }

      </div>
    </section>
}
