import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

function App() {
  return (
    <section style={{backgroundImage: "url(./images/suraj.jpeg)"}}>
      <>
      <NavBar />
      <Header/>
      <Hero/>
      <Form/>
      <Footer/>
      </>
   </section>
  );
}

export default App;

