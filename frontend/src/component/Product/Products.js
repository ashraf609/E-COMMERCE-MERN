import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";

const product = {
  name: "Accessoire1",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1613766130075-CLFTKZY2I74YITJ24XEE/R0070CEP_800x800.jpg?format=750w",
    },
  ],
  price: "1000MAD",
  _id: "628a3d7110b359b139803364",
};
const product2 = {
  name: "Accessoire2",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1613764885908-BNBBNU35NH15FJXUO5UT/7365dd0b-48f0-4455-8e7e-7a35956c35bf_V16r3tZ.jpg.800x800_q85_background.jpg?format=750w",
    },
  ],
  price: "500MAD",
  _id: "628a3da010b359b139803367",
};
const product3 = {
  name: "Accessoire3",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1613766882804-EWU8901XQ5EXXWN8UFEW/R0137CLP_800x800.jpg?format=750w",
    },
  ],
  price: "800MAD",
  _id: "628a3f2b10b359b13980336d",
};
const product4 = {
  name: "Accessoire4",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1613573005874-W2JIVR8I76074BX4J14K/7P003CLP.png?format=750w",
    },
  ],
  price: "1000MAD",
  _id: "628a3fa210b359b139803370",
};
const product5 = {
  name: "Accessoire5",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1612275275634-ZAUJABHRG7JUNSWUTKMV/RG10636-4WB_Angle.jpg?format=750w",
    },
  ],
  price: "2000MAD",
  _id: "DDA",
};
const product6 = {
  name: "Accessoire6",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1612275661953-GD08WY5YK6F026KLDAJ3/PD33092-1YD.jpg?format=750w",
    },
  ],
  price: "400MAD",
  _id: "628a405e1d89e4b152283a5e",
};
const product7 = {
  name: "Accessoire7",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1611858294781-K3Q55630U6682FLXBYVR/RG10835-4WF.jpg?format=750w",
    },
  ],
  price: "4000MAD",
  _id: "628a411c1d89e4b152283a61",
};
const product8 = {
  name: "Accessoire8",
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1611720024242-VVRFKIQPE3CHUKQWDOLG/Screenshot+2021-01-26+225932.png?format=750w",
    },
  ],
  price: "1500MAD",
  _id: "628a417036affd28d30069e1",
};
const categories = ["Bagues", "Gormmetes", "Boucles"];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
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
    </Fragment>
  );
};

export default Products;
