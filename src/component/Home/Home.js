import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product/Product";

function Home() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    );
    setUsers(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="home_">
      <div className="home__container">
        <img
          className="homeImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {/* Product */}
        <div className="homeRow">
          {users.map((product) => {
            // console.log(product)

            return <Product data={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
