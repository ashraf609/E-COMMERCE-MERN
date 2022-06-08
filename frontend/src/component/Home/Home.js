import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
const product = {
  name: "Accessoire1",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1613766561318-PCLQOXPL8DBGL2XN289L/R0070CEP+V%281%29.gif?format=750w",
    },
  ],
  price: "1000MAD",
  _id: "628a3d7110b359b139803364",
};
const product2 = {
  name: "Accessoire2",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1613765926944-EK9M0PPXVSGTT4TDPSJN/R0070CAT+V%281%29.gif?format=750w",
    },
  ],
  price: "500MAD",
  _id: "628a3da010b359b139803367",
};
const product3 = {
  name: "Accessoire3",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1613767929261-NTHUQPD9V98YJ389WXC6/R0137CLP+V%281%29.gif?format=750w",
    },
  ],
  price: "800MAD",
  _id: "628a3f2b10b359b13980336d",
};
const product4 = {
  name: "Accessoire4",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1613757007408-BD34AKFYNQR8AU352ZRX/7P003CLP+V%281%29.gif?format=750w",
    },
  ],
  price: "1000MAD",
  _id: "628a3fa210b359b139803370",
};
const product5 = {
  name: "Accessoire5",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1610422798321-OMAJXSCY9NWIZE6327G3/9R040CLP%281%29.gif?format=750w",
    },
  ],
  price: "2000MAD",
  _id: "DDA",
};
const product6 = {
  name: "Accessoire6",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1610424587834-II83BLG25NBDN4F5MLDT/R0183CLP%281%29.gif?format=750w",
    },
  ],
  price: "400MAD",
  _id: "628a405e1d89e4b152283a5e",
};
const product7 = {
  name: "Accessoire7",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1610421125332-SG75XB4SFIXOHS0U3VYE/N0189CLP+V+%281%29%281%29.gif?format=750w",
    },
  ],
  price: "400MAD",
  _id: "628a411c1d89e4b152283a61",
};
const product8 = {
  name: "Accessoire8",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1611719057124-TFPO8UIFIM1MTK26RI13/P0235CLP+V%282%29.gif?format=750w",
    },
  ],
  price: "1500MAD",
  _id: "628a417036affd28d30069e1",
};
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to NEY LEN</p>
            <h1>FIND AMAZING JEWELLERY </h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            <ProductCard product={product} />
            <ProductCard product={product2} />
            <ProductCard product={product3} />
            <ProductCard product={product4} />
            <ProductCard product={product5} />
            <ProductCard product={product6} />
            <ProductCard product={product7} />
            <ProductCard product={product8} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
