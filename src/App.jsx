import Palette from './Palette';
import seedsColors from './seedsColors';
import { generatePalette } from "./colorHelpers";


function App() {
  console.log(generatePalette(seedsColors[4]));
  return (
    <>
     <Palette {...seedsColors[4]} />
    </>
  )
}

export default App
