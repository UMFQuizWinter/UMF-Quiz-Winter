import './App.css';
import Card from './components/card/Card'
import Picker from './components/picker/Picker'
import ComingSoon from './components/coming-soon/ComingSoon'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/UMF-Quiz-Winter/card/anato" element={<Card subject="anato" />} />
        <Route path="/UMF-Quiz-Winter/card/diabet" element={<Card subject="diabet" />} />
        <Route path="/UMF-Quiz-Winter/card/fizio" element={<Card subject="fizio" />} />
        <Route path="/UMF-Quiz-Winter/card/farmaco" element={<ComingSoon />} />
        <Route path="/UMF-Quiz-Winter/card/fiziopat" element={<ComingSoon />} />
        <Route path="/UMF-Quiz-Winter/card/semiologie" element={<ComingSoon />} />
        <Route path="/UMF-Quiz-Winter/card/semiochir" element={<ComingSoon />} />
        <Route path="/UMF-Quiz-Winter" element={<Picker />} />
        <Route path="/" element={<Picker />} />
      </Routes>
    </>
  );
}

export default App;
