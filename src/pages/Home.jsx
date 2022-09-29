import { Layout } from '../components';
import {
  Banner,
  Collection,
  Featured,
  NewCollection,
  Offer,
  WomenSection,
} from '../components/Home';

import CookieConsent from 'react-cookie-consent';

const CookieConsentContainer = () => {
  return <CookieConsent 
    buttonText="J'ai compris"
    cookieName="allowCookiesOnSite"
    buttonStyle={{
      backgroundColor: '#fff',
      color: "black",
      height: "100%",
      fontWeight: "bold",
    }}
    style={{ backgroundColor: "rgb(30 41 59)"  }}>
      <p style={{ lineHeight: "1" }}>
      Ce site utilise des cookies.{` `}<br />
      <span style={{ fontSize: "12px" }}>Nous les utilisons pour vous offrir une expérience utilisateur de qualité. 
      En continuant votre navigation, vous acceptez l'utilisation de ces cookies.</span>
      </p>
  </CookieConsent>
};

export default function Home() {
  return (
    <Layout>
      {/* Main */}
      <main className="main">
        {/* Banner */}
        <Banner />
        {/* Cookie consent component */}
        <CookieConsentContainer />
        {/* Features */}
        <Featured />
        {/* Collection */}
        <Collection />
        {/* Women Section */}
        <WomenSection />
        {/* Offer */}
        <Offer />
        {/* New Collection */}
        <NewCollection />
      </main>
    </Layout>
  );
}
