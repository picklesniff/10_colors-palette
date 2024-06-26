import * as React from "react";
import { useState, useCallback, useEffect  } from "react";
import { Routes, Route, useParams, useNavigate, Navigate } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedsColors from "./seedsColors";
import NewPaletteForm from "./NewPaletteForm";
import { generatePalette } from "./colorHelpers";

function App() {
  const [palettes, setPalettes] = useState(() => {
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    return savedPalettes || seedsColors;
  });
  const navigate = useNavigate(); 
  const findPalette = (id) => palettes.find((palette) => palette.id === id);
  const deletePalette = (id) => {
    const updatedPalettes = palettes.filter(palette => palette.id !== id);
    setPalettes(updatedPalettes);
  };
  const PaletteWrapper = () => {
    const { id } = useParams();
    const palette = generatePalette(findPalette(id));
    return <Palette palette={palette} />;
  };

  const syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  };

  useEffect(() => {
    syncLocalStorage();
  }, [palettes]);

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
      <Route path="/" element={<PaletteList palettes={palettes} deletePalette={deletePalette} />} />
      <Route path='/palette/new' element={<NewPaletteForm savePalette={savePalette} palettes={palettes} />} />
      <Route path="/palette/:id" element={<PaletteWrapper />}  />
      <Route path="/palette/:paletteId/:colorId" element={<SingleColorPaletteWrapper />}  />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
