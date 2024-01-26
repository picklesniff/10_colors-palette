import * as React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Palette from "./Palette";
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
      <Route path="*" element={<h1>Home</h1>} />
      <Route path="/palette/:id" element={<PaletteWrapper />}  />
      {/* <Palette palette={generatePalette(seedsColors[4])} /> */}
    </Routes>
  );
}

export default App;


