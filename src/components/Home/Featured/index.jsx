import './Featured.css';
import { useService } from '../../../utils/hooks';
import { useEffect, useState } from 'react';

export default function Featured() {

  const [products, setProducts] = useState({ isFetched: false, datas: undefined });

  const service = useService();

  useEffect(() => {
    if (products.isFetched || !!products.datas) return;

    console.log("Fetching featured products...");

    const fetchFeatured = async () => {
      const featured = await service.getFeaturedProducts();
      const randomFeatured = featured.data.sort(() => 0.5 - Math.random()).slice(0, 3);
      setProducts({ isFetched: true, datas: randomFeatured });
    };

    fetchFeatured();
  }, [products]);

  useEffect(() => {
    console.log("Featured products fetched, and sorted");
    console.log(products.datas);
  }, [products.datas]);

  return products.isFetched && products.datas && <section className="featured section" id="featured">
      <h2 className="section-title">FEATURED</h2>

      <div className="featured__container grid">
        { 
          products.datas.map((product, index) => <article className="sneaker" key={index}>
              { product?.Promo !== "" && <div className="sneaker__sale">En solde</div> }
              <img src={`${product.picture_1}`} alt="" className="sneaker__img" />
              <span className="sneaker__name">{product?.firme} { product?.name }</span>
              <span className="sneaker__preci">{ product?.price } €</span>
              <a href="#" className="button-light">
                Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
              </a>
            </article>
          )
        }
      </div>
    </section>
};