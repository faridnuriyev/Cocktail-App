import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cocktail from "./Cocktail-Canvas/Cocktail";
import Header from "./Header/Header";
import CocktailsByAlchohol from "./alchoholic/CocktailsByAlchohol";
import CocktailsByNonAlchohol from "./nonAlchoholic/CocktailsByNonAlchohol";
import Main from "./Main/Main";
import Contact from "./Contact/Contact";
import NotFound from "./NotFound/NotFound";
import Footer from "./Footer/Footer";

function App() {
  const [canvaShow, setCanvaShow] = useState({
    id: null,
    offcanvas: false,
  });

  function cocktailShow(id) {
    setCanvaShow({
      id: id,
      offcanvas: !offcanvas,
    });
  }

  let { id, offcanvas } = canvaShow;
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main cocktailShow={cocktailShow} />} />
        <Route path="CocktailsByAlchohol" element={<CocktailsByAlchohol />} />
        <Route path="CocktailsByNonAlchohol" element={<CocktailsByNonAlchohol />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Cocktail id={id} show={offcanvas} cocktailShow={cocktailShow} />
    </>
  );
}

export default App;
