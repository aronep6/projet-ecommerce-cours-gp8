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
  return <CookieConsent style={{ backgroundColor: "rgb(30 41 59)"  }}>
      Ce site utilise des cookies.{` `}
      <span style={{ fontSize: "10px" }}>Nous les utilisons pour vous offrir une expérience utilisateur de qualité. 
      En continuant votre navigation, vous acceptez l'utilisation de ces cookies.</span>
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
