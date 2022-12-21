import Header from './components/Header'
import {Menu} from "./components/Menu";
import {FirstScreen} from "./screens/FirstScreen";
import {Brands} from "./screens/Brands";
import {Products} from "./screens/Products";

function App() {
  return (
    <div className="bg-[#F1F1F1]">
        <Header/>
        <Menu/>
        <FirstScreen/>
        <Brands/>
        <Products/>
    </div>
  )
}

export default App
