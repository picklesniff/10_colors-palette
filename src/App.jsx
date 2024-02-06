import * as React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedsColors from "./seedsColors";
import NewPaletteForm from "./NewPaletteForm";
import { generatePalette } from "./colorHelpers";

function App() {
  const findPalette = (id) => seedsColors.find((palette) => palette.id === id);
  const PaletteWrapper = () => {
    const { id } = useParams();
    const palette = generatePalette(findPalette(id));
    return <Palette palette={palette} />;
  };
  const SingleColorPaletteWrapper = () => {
    const { paletteId, colorId } = useParams();
    const palette = generatePalette(findPalette(paletteId));
    return <SingleColorPalette palette={palette} colorId={colorId} />;
  }
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedsColors} />} />
      <Route path='/palette/new' element={<NewPaletteForm />} />
      <Route path="/palette/:id" element={<PaletteWrapper />}  />
      <Route path="/palette/:paletteId/:colorId" element={<SingleColorPaletteWrapper />}  />
    
    </Routes>
  );
}

export default App;


