import Navbar from "./components/Navbar";
import MainPge from "./components/MainPge";
import ProfileIcon from "./components/ProfileIcon";
import Footer from "./components/Footer";
import AllPages from './components/AllPages'

function App() {

  return (
    <div className="relative pt-2 h-screen w-screen">
      <Navbar/>
      <MainPge/>
      <ProfileIcon/>
      <AllPages/>
      <Footer/>
    </div>
    
  );
}

export default App;
