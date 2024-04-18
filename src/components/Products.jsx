import React from "react";
import jazzybite from "../assets/Jazzy-bite.jpg";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import heartImg from "../assets/Heart-Img.svg";
import Placeholder from "react-bootstrap/Placeholder";
import "../styles/Product.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    try {
      const req = await fetch("https://jazzy-mern.onrender.com/api/products");
      const res = await req.json();
      console.log(res.products);
      console.log(res);
      setData(res.products);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="my-5 row">
      {isLoading &&
        <div>
          {" "}<h2 className="text-center">loading...</h2>{" "}
        </div>}
      {/* div-1 */}
      <div className="d-none d-lg-block col-lg-3">
        <img src={jazzybite} alt="jazzybite-pic" className="w-100 h-100" />
      </div>
      {/* div-2 */}
      <div className="col-lg-9">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
          {data.map(datum => {
            const { _id, title, price, image } = datum;
            return (
              <Card
                key={_id}
                className="card-inner rounded-4 position-relative"
              >
                <Card.Img variant="top" src={image} />
                <Card.Img
                  className="w-25 position-absolute top-0 end-0 rounded-pill p-3 "
                  variant="top"
                  src={heartImg}
                />
                <Card.Body>
                  {/* <Placeholder as={title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder> */}
                  <Card.Title className="fs-6">
                    {" "}{title}{" "}
                  </Card.Title>
                  <Card.Text>
                    <span className="fw-lighter"> Total Price </span>
                    <br />
                    <span className="fw-bold">
                      #{price}{" "}
                    </span>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;
