import MyButton from "./components/MyButton";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const navHeading = "Navigation Bar";
  const navText = "Sosmed";

  const clicked = () => {
    return alert("button di pencet");
  };

  const paragraf = () => {
    return (
      <div>
        <h3>mantap bang</h3>
        <i>horeee</i>
        <marquee>jos gandos</marquee>
      </div>
    );
  };

  return (
    <div>
      <header>
        <Navbar navText={navText} navHeading={navHeading} />
        <p>HALO CUY 😎</p>
        <MyButton clicked={clicked} />
        <Footer paragraf={paragraf} />
      </header>
    </div>
  );
};

export default App;
