import * as React from "react";
import { useState, useCallback  } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedsColors from "./seedsColors";
import NewPaletteForm from "./NewPaletteForm";
import { generatePalette } from "./colorHelpers";

function App() {
  const [palettes, setPalettes] = useState(seedsColors);
  const navigate = useNavigate(); 
  const findPalette = (id) => palettes.find((palette) => palette.id === id);
  const PaletteWrapper = () => {
    const { id } = useParams();
    const palette = generatePalette(findPalette(id));
    return <Palette palette={palette} />;
  };

  const savePalette = useCallback(
    (newPalette) => {
      setPalettes([...palettes, newPalette]);
      navigate('/');
    },
    [palettes, navigate]
  );

  const SingleColorPaletteWrapper = () => {
    const { paletteId, colorId } = useParams();
    const palette = generatePalette(findPalette(paletteId));
    return <SingleColorPalette palette={palette} colorId={colorId} />;
  };

  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={palettes} />} />
      <Route path='/palette/new' element={<NewPaletteForm savePalette={savePalette} palettes={palettes} />} />
      <Route path="/palette/:id" element={<PaletteWrapper />}  />
      <Route path="/palette/:paletteId/:colorId" element={<SingleColorPaletteWrapper />}  />
    </Routes>
  );
}

export default App;
