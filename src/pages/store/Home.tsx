import ClientReviews from "../../modules/store/Homepage/ClientReviews/ClientReviews";
import Hero from "../../modules/store/Homepage/Hero";
import Menu from "../../modules/store/Homepage/Menu/Menu";
import PopularDishser from "../../modules/store/Homepage/PopularDisher/PopularDishser";
import Specialty from "../../modules/store/Homepage/Specialty/Specialty";

const Home = () => (
  <>
    <Hero />
    <Menu />
    <Specialty />
    <PopularDishser />
    <ClientReviews />
  </>
);

export default Home;
