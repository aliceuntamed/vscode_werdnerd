import Navigation from "../../components/Navigation/Navigation";
import { Footer } from "../../components/layout/Footer";

import Hero from "./Hero";
import CuratedPicks from "./CuratedPicks";
import WOTD from "../components/werd/WOTD";

<WOTD />;
import SpinTheVault from "./SpinTheVault";
import QuickBrowse from "./QuickBrowse";
import ContributeCTA from "./ContributeCTA";

export default function HomePage() {
  return (
    <>
      <Navigation />

      <Hero />
      <CuratedPicks />
      <WOTD />
      <SpinTheVault />
      <QuickBrowse />
      <ContributeCTA />

      <Footer />
    </>
  );
}
