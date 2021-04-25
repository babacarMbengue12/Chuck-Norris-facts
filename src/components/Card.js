import React from "react";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import CardItem from "./CardItem";
const Card = ({ img }) => {
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(null);
  React.useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      setItem(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="col-sm-12 col-md-6 col-lg-4  mt-2 mb-2">
      {loading && <Skeleton width={"100%"} height={200} />}
      {!loading && <CardItem img={img} item={item} />}
    </div>
  );
};

export default Card;
