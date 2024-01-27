import * as React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedsColors from "./seedsColors";
import { generatePalette } from "./colorHelpers";

function App() {
  const findPalette = (id) => seedsColors.find((palette) => palette.id === id);
  const PaletteWrapper = () => {
    const { id } = useParams();
    const palette = generatePalette(findPalette(id));
    return <Palette palette={palette} />;
  };
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedsColors} />} />
      <Route path="/palette/:id" element={<PaletteWrapper />}  />
    </Routes>
  );
}

export default App;


