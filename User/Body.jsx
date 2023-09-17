import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Sliders from "./components/Sliders";
import Category from "./components/Category";
import Footer from "./components/Footer";

function Body() {
  const [upcomingData, setUpcomingData] = useState([]);
  const [newArrivalsData, setNewArrivalsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2000/userdata?cName=Upcommings")
      .then((response) => response.json())
      .then((result) => {
        setUpcomingData(result);
      })
      .catch((error) => console.error("Error fetching Upcoming data:", error));

    fetch("http://localhost:2000/userdata?cName=NewArrivals")
      .then((response) => response.json())
      .then((result) => {
        setNewArrivalsData(result);
      })
      .catch((error) =>
        console.error("Error fetching NewArrivals data:", error)
      );
  }, []);

  return (
    <div className="App">
      <Header />
      <Sliders />
      <Category />

      <section className="py-5">
        <div className="container">
          <h1 className="text-center text-3xl font-bold mb-5">Upcoming Products</h1>
          <div className="flex">
            {upcomingData.map((item, index) => (
              <div className="product-flex-item" key={index}>
                <Product className="m-10"
                  name={item.name}
                  imageUrl={item.imageUrl}
                  discount={item.discount}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h1 className="text-center text-3xl font-bold mb-5">New Arrivals Products</h1>
          <div className="flex ">
            {newArrivalsData.map((item, index) => (
              <div className="product-flex-item" key={index}>
                <Product className="m-20"
                  name={item.name}
                  imageUrl={item.imageUrl}
                  discount={item.discount}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Body;
