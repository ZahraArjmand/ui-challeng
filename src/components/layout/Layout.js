import React from "react";
import Header from "../header/Header";
import Search from "../search/Search";
import RecommendFlights from "../recommendedFlights/RecommendFlights";
import RecommendedHotels from "../recommendedHotels/RecommendedHotels";
import PopularDestination from "../popularDestination/PopularDestination";
import FQestion from "../FAQ/FQuestion";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Search />
      <RecommendFlights />

      <RecommendedHotels />
      <PopularDestination />
      <FQestion />
      <Footer />
    </div>
  );
};

export default Layout;
