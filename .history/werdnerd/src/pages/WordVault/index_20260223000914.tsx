import Navigation from "../../components/Navigation/Navigation.tsx";
import Footer from "../../components/Footer/Footer";

import VaultHero from "./VaultHero";
import CuratedPicks from "./CuratedPicks";
import SpinTheVault from "./SpinTheVault";
import QuickBrowse from "./QuickBrowse";

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
