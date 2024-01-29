import { Card } from "../card/card";

export default function CardList({ data }) {
return (
  <>
    {data?.map((item) => (
      <Card key={item._id} item={item} />
    ))}
  </>
);
}