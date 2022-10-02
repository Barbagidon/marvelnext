import { useContext } from "react";
import { MainPageContext } from "../../context/mainpage.context";

export default function Rap(): JSX.Element {
  const x = useContext(MainPageContext);
  console.log(x);

  return <h2></h2>;
}
