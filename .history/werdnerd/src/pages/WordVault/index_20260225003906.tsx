import Navigation from "../../components/Navigation/Navigation.tsx";
import Footer from "../../components/layout/Footer/Footer.tsx";

import VaultHero from "./VaultHero";
import CuratedPicks from "../Home/CuratedPicks.tsx";
import SpinTheVault from "./SpinTheVault";
import QuickBrowse from "../Home/QuickBrowse.tsx";

export default function werdVault() {
  return (
    <>
      <Navigation />
      <VaultHero />
      <CuratedPicks />
      <SpinTheVault />
      <QuickBrowse />
      <Footer />
    </>
  );
}
