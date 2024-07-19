import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"; // Import useLocation
import Body_first from "./components/First_Body.jsx";
import SlowScrollImage from "./components/SlowScrolling.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";
import Contact_us from "./components/Contact_us.jsx";
import ShopProd from "./components/ShopProd.jsx";
import LogIn from "./components/LogIn.jsx";
import Brands from "./components/Brands.jsx";
import Signup from "./components/SignUp.jsx";
// import First_Body from "./components/First_Body.jsx"
// import ProductCard from "./components/ProdCard.jsx";
import HomeClick from "./components/HomeClick.jsx";
import Blog from "./components/Blog.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = ({ children }) => {
  return <div>{children}</div>;
};

function App() {
  return (
    <div>
    <Fragment>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <SlowScrollImage />
              <Body_first />
            </MainLayout>  } />
        <Route path="/components/Contact_us" element={<Contact_us />} />
        <Route path="/components/ShopProd" element={<ShopProd />} />
        <Route path="/components/LogIn" element={<LogIn />} /> 
        {/* <Route path="/components/ClickedItem0" element={<ClickedItem prodName="WOMEN'S PRET-CHIFFON DRESS | N-2271"  price='Rs.5999.00' img_link='https://www.rafia.pk/cdn/shop/files/N-2299-_1_600x.jpg?v=1720000711' />} />
        <Route path="/components/ClickedItem1" element={<ClickedItem prodName="WOMEN'S PRET-CHIFFON DRESS | N-2271" price='Rs.5999.00' img_link='https://www.rafia.pk/cdn/shop/files/N-2302_1_600x.jpg?v=1708408839' />} />
        <Route path="/components/ClickedItem2" element={<ClickedItem prodName="WOMEN'S PRET-CHIFFON DRESS | N-2326" price='Rs.5999.00' img_link='https://www.rafia.pk/cdn/shop/files/N-2326_1_600x.jpg?v=1708409828' />} />
        <Route path="/components/ClickedItem3" element={<ClickedItem prodName="WOMEN'S PRET-CHIFFON DRESS | N-2330" price='Rs.5999.00' img_link='https://www.rafia.pk/cdn/shop/files/N-2330_5_600x.jpg?v=1705995059' />} />
        <Route path="/components/ClickedItem4" element={<ClickedItem prodName="WOMEN'S PRET-CHIFFON DRESS | N-2339" price='Rs.5999.00' img_link='https://www.rafia.pk/cdn/shop/files/N-2319-_1_600x.jpg?v=1702981917' />} />
        <Route path="/components/ClickedItem5" element={<ClickedItem prodName="WOMEN'S PRET-CHIFFON DRESS | N-2262 Shocking Pink" price='$50.00' img_link='https://www.rafia.pk/cdn/shop/files/N-2281-_4_400x.jpg?v=1686982794' />} />
         */}
         <Route path="/components/Brands" element={<Brands/>}/>
        <Route path="/components/SignUp" element={<Signup/>}/>
        <Route path="/components/HomeClick/:imgSrc/:productName/:price" element={<HomeClick/>} />
        <Route path="/components/Blog" element={<Blog/>}/>

      </Routes>
      
      <Footer />
    </Fragment>
    </div>
  );
}

export default App;
