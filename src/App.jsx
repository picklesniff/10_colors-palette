import Palette from './Palette';
import seedsColors from './seedsColors';
import './App.css'

function App() {
  return (
    <>
     <Palette {...seedsColors[4]} />
    </>
  )
}

export default App
