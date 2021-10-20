import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import axios from "axios";

function App() {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    const movieList = async () => {
      const res = await axios.get("http://localhost:5000");
      setMovies(res.data);
    };
    movieList();
    console.log(movie);
  }, [movie]);
  return (
    <div className="container">
      {movie.map((item) => {
        return (
          <Card key={item.id} className="">
            <CardImg
              top
              width="100%"
              src="/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Movie: {item.movie}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                rating: {item.rating}
              </CardSubtitle>
              <CardText>{item.rating}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default App;
