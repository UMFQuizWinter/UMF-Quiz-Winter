import './App.css';
import Card from './components/card/Card'
import Picker from './components/picker/Picker'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/UMF-Quiz-Winter/card/anato" element={ <Card subject="anato"/> } />
        <Route path="/UMF-Quiz-Winter/card/diabet" element={ <Card subject="diabet"/> } />
        <Route path="/UMF-Quiz-Winter" element={ <Picker/> } />
        <Route path="/" element={ <Picker/> } />
      </Routes>
    </>
  );
}

export default App;
