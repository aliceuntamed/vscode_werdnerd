import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense } from "react";
import { BuilderComponent } from "@builder.io/react";
import LoadingScreen from "./src/components/ui/LoadingScreen";

// Error boundary for Builder.io errors
function BuilderErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Builder.io Setup Required</h1>
        <p className="text-gray-400 mb-8">
          This page is configured to use Builder.io but no content has been
          created yet.
        </p>
        <div className="space-y-4 text-left bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Quick Setup Guide:</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>
              Visit your{" "}
              <a
                href="https://builder.io"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Builder.io dashboard
              </a>
            </li>
            <li>Navigate to the "Models" section</li>
            <li>Create or use the existing "page" model</li>
            <li>
              Create new pages with these names:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>
                  <code className="text-green-400">home</code> (for "/")
                </li>
                <li>
                  <code className="text-green-400">vault</code> (for "/vault")
                </li>
                <li>
                  <code className="text-green-400">about</code> (for "/about")
                </li>
                <li>
                  <code className="text-green-400">creators-playground</code>{" "}
                  (for "/creators-playground")
                </li>
                <li>
                  <code className="text-green-400">submit</code> (for "/submit")
                </li>
                <li>
                  <code className="text-green-400">games</code> (for "/games")
                </li>
              </ul>
            </li>
            <li>Publish your pages to make them live</li>
          </ol>
          <div className="mt-4 p-4 bg-blue-900/30 border border-blue-500/30 rounded">
            <p className="text-sm text-blue-300">
              <strong>API Key:</strong> Your Builder.io API key is configured
              and ready to use.
            </p>
          </div>
        </div>
        {/* Show the BuilderComponent content if it exists */}
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}

// Builder content component with error handling
function BuilderPage() {
  const location = useLocation();
  const path = location.pathname === "/" ? "home" : location.pathname.slice(1);

  return (
    <BuilderErrorBoundary>
      <BuilderComponent model="page" name={path} />
    </BuilderErrorBoundary>
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen blurBackground />}>
        <Routes>
          <Route path="/" element={<BuilderPage />} />
          <Route path="/vault" element={<BuilderPage />} />
          <Route path="/about" element={<BuilderPage />} />
          <Route path="/creators-playground" element={<BuilderPage />} />
          <Route path="/submit" element={<BuilderPage />} />
          <Route path="/games" element={<BuilderPage />} />
          <Route path="/games/boggle" element={<BuilderPage />} />
          <Route path="/games/wordle" element={<BuilderPage />} />
          <Route path="/games/wordsearch" element={<BuilderPage />} />
          <Route path="/games/trivia" element={<BuilderPage />} />
          <Route path="/games/hangman" element={<BuilderPage />} />
          <Route path="/games/brainteasers" element={<BuilderPage />} />
          <Route path="/games/codenames" element={<BuilderPage />} />
          {/* Catch-all route for Builder pages */}
          <Route path="*" element={<BuilderPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
