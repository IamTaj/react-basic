import React, { useParams, useState } from "react";
import { Link } from "react-router-dom";
import prod from "../JSON/Product.json";
import "./homepage.css";
export default function HomePage() {
  const [product, setProduct] = useState();
  //  let { slug } = useParams(()=>{
  //    return <div>Now Showing post {slug}</div>
  //  });

  const handelClick = (event, items) => {
    // setProduct(event?.target?.value);
    // console.log(items);
    setProduct([...product,items])
    // window.location.assign(`/Singlepage/?${items?.id}`);
    };

  return (
    <>
      <div className="home">
        <div className="sidebar"></div>
        <div className="content">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://img.freepik.com/free-vector/black-friday-sale-banner-with-limited-time-offer-details_1017-28051.jpg"
                  class="d-block w-100"
                  alt="..."
                  height={"400px"}
                />
              </div>
              <div class="carousel-item">
                <img
                  src="data:image/jpeg;base64,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"
                  class="d-block w-100"
                  alt="..."
                  height={"400px"}
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://img.freepik.com/free-vector/modern-promotional-sales-banner-design_1017-9787.jpg"
                  class="d-block w-100"
                  alt="..."
                  height={"400px"}
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="main-div">
            {prod.map((items) => {
              return (
                <>
                  <div className="items">
                    <div className="product">
                      <div className="photo">
                        <img src={items.image} alt="" width={"140px"} />
                      </div>
                      <div className="product-details">
                        <div className="title">{items.title}</div>
                        <div className="price"> ₹{items.price}</div>
                      </div>
                      <div className="btn">
                        <Link to={`/Singlepage/?${items?.id}`}>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={(event) => handelClick(event, items)}
                          >
                            View Item
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
