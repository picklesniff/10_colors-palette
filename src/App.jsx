import Palette from './Palette';
import seedsColors from './seedsColors';


function App() {
  return (
    <>
     <Palette {...seedsColors[4]} />
    </>
  )
}

export default App
