import './Featured.css';

export default function index() {
  
  return (
    <section className="featured section" id="featured">
      <h2 className="section-title">FEATURED</h2>

      <div className="featured__container grid">
        <article className="sneaker">
          <div className="sneaker__sale">Sale</div>
          <img src="/img/featured1.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Jordan</span>
          <span className="sneaker__preci">$149.99</span>
          <a href="#" className="button-light">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <div className="sneaker__sale">Sale</div>
          <img src="/img/featured2.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Free RN</span>
          <span className="sneaker__preci">$149.99</span>
          <a href="#" className="button-light">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <div className="sneaker__sale">Sale</div>
          <img src="/img/featured3.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Free RN</span>
          <span className="sneaker__preci">$149.99</span>
          <a href="#" className="button-light">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>
      </div>
    </section>
  );
}
