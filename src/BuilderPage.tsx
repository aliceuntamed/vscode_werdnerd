import { BuilderComponent } from "@builder.io/react";
import { useLocation } from "react-router-dom";

export default function BuilderPage() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white">
      <BuilderComponent model="page" url={location.pathname} />
    </div>
  );
}
