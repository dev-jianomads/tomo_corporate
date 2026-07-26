import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function RedirectTo({ path }: { path: string }) {
  useLayoutEffect(() => {
    window.location.replace(path + window.location.search + window.location.hash);
  }, [path]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectTo path="/home.html" />} />
        <Route path="/terms" element={<RedirectTo path="/terms/" />} />
        <Route path="/privacy" element={<RedirectTo path="/privacy/" />} />
      </Routes>
    </BrowserRouter>
  );
}
