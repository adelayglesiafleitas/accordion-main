import "./index.css";
import "./App.css";
import HeaderAccordion from "./componets/HeaderAccordion.jsx";
import Footer from "./componets/Footer.jsx";
import ListAccordion from "./componets/ListAccordion.jsx";

const App = () => {
  return (
    <>
      <main className="container-main">
        <section className="container-accordion">
          <HeaderAccordion />
          <ListAccordion />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
