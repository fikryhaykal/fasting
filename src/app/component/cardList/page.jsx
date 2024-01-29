import { Card } from "../card/card";

export default function CardList({ data }) {
  return (
    <>
      {data.map((item) => {
        return <Card key={item._id} item={item} />;
      })}
    </>
  );
}