import Navbar from "./components/Navbar";
import MainPge from "./components/MainPge";
import ProfileIcon from "./components/ProfileIcon";
import Footer from "./components/Footer";
import Content from './components/Content'

function App() {

  return (
    <div className="relative pt-2 h-screen w-screen">
      <Navbar/>
      <MainPge/>
      <ProfileIcon/>
      <Content/>
      <Footer/>
    </div>
    
  );
}

export default App;
