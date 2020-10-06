import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <img
          alt=""
          src="https://geographical.co.uk/media/k2/items/cache/eb8c0a46c2085216dea7d19f92a60fd7_XL.jpg"
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="1"
            title="  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Debitis"
            price={0.5}
            rating={5}
            image="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"
          />
          <Product
            id="2"
            title="sfgsfgsf Lorem sit amet consectetur adip lkjkdfs mkkoeprdfs"
            price={0.5}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Debitis"
            price={0.5}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU9N2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1583175286498"
          />
          <Product
            id="4"
            title="sfgsfgsf Lorem sit amet consectetur adip lkjkdfs mkkoeprdfs"
            price={0.5}
            rating={5}
            image="https://petapixel.com/assets/uploads/2017/03/product1.jpeg"
          />
          <Product
            id="5"
            title="sfgsfgsf Lorem sit amet consectetur adip lkjkdfs mkkoeprdfs"
            price={0.5}
            rating={5}
            image="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/clear-hp-banner.jpg?t=1594246594&_ga=2.188511016.1694956847.1594054613-1595596290.1594054613"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="sfgsfgsf Lorem sit amet consectetur adip lkjkdfs mkkoeprdfs"
            price={0.5}
            rating={5}
            image="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
