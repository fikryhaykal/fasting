

import CardList from "./component/cardList/page";
import { Modal } from "./component/modal/modal";
import Nav from "./component/nav/nav";
import Wrap from "./component/wrap/wrap";


export const dynamic = "force-dynamic"; // bypass si cache

async function getData() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/vDvidNdifZgr");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getData();
  return (
    <div>
      <Modal />
      <Nav />
      <Wrap>
        <CardList data={data} />
      </Wrap>
    </div>
  );
}
