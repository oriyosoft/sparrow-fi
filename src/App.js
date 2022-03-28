import NavBar from "./components/navbar";
import NewProducts from "./components/newproducts";
import Brands from "./components/brands";
import Shops from "./components/shops";
import NewsLetter from "./components/newsletter";
import AllProducts from "./components/allproducts";
import Story from "./components/story";
import Trends from "./components/trends";
import Partners from "./components/partners";
import Teams from "./components/teams";
import Footer from "./components/footer";
import "./css/style.css";

function App() {
  return (
    <div className="wrapper" id="wrapper">
      <NavBar />
      <NewProducts />
      <Brands />
      <Shops />
      <NewsLetter />
      <AllProducts />
      <Story />
      <Trends />
      <Partners />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;
