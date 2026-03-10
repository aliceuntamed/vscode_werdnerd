import { useEffect, useState } from "react";
import { PageWrapper } from "../../components/layout/PageWrapper";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { ChromeSky } from "../../components/ui/ChromeSky";

import { useUser } from "@supabase/auth-helpers-react";
import { useFavorites } from "../../hooks/useFavorites";

import { WerdCard } from "../../components/werd/WerdCard";
import { getAllWerds } from "../../utils/supabase/queries/werds";

export default function WerdVaultPage() {
  const user = useUser();
  const { isFavorite, toggle } = useFavorites(user?.id);

  const [werds, setWerds] = useState([]);

  useEffect(() => {
    getAllWerds().then(setWerds);
  }, []);

  return (
    <PageWrapper>
      <ChromeSky className="-z-10 opacity-60" density="medium" />

      <Header />

      <main className="relative z-10">
        {werds.map((w) => (
          <WerdCard
            key={w.id}
            {...w}
            isFavorite={isFavorite(w.id)}
            onToggleFavorite={() => toggle(w.id)}
            showFavorite
            showPronunciation
            showPartOfSpeech
            showDefinition
            showTags
            showLanguage
            showSource
          />
        ))}
      </main>

      <Footer />
    </PageWrapper>
  );
}
