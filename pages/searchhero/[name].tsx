import { useContext } from "react";
import { MainPageContext } from "../../context/mainpage.context";

export default function HeroFromSearch(): JSX.Element {
  const { characterFromSearch } = useContext(MainPageContext);
  console.log(characterFromSearch);

  return <h2>{characterFromSearch?.name || "hELLO"}</h2>;
}
