import * as React from 'react';
import Palette from './Palette';
import seedsColors from './seedsColors';
import { generatePalette } from "./colorHelpers";


function App() {
  return (
    <>
     <Palette palette={generatePalette(seedsColors[4])} />
    </>
  )
}

export default App
