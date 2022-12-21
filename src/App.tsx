import {Header} from './components/Header'
import {Menu} from "./components/Menu";
import {FirstScreen} from "./screens/FirstScreen";
import {Brands} from "./screens/Brands";
import {Products} from "./screens/Products";
import {Collections} from "./screens/Collections";
import {Seller} from "./screens/Seller";
import {Follow} from "./screens/Follow";
import {Contact} from "./screens/Contact";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="bg-[#F1F1F1]">
        <Header/>
        <Menu/>
        <FirstScreen/>
        <Brands/>
        <Products/>
        <Collections/>
        <Seller/>
        <Follow/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
