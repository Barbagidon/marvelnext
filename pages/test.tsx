import { Button } from "../components/Button/Button";
import { Htag } from "../components/Htag/Htag";
import { P } from "../components/P/P";

export default function Test(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-around",
      }}
    >
      <Htag tag="h3">Заголовок</Htag>
      <Button color="red">text</Button>
      <Button color="grey">text</Button>
      <P size="small">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
        similique magni cupiditate eum obcaecati, atque ab repellat quis odit
        quasi dignissimos excepturi explicabo! Neque enim at corporis veniam
        inventore fuga!
      </P>

      <P size="medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
        similique magni cupiditate eum obcaecati, atque ab repellat quis odit
        quasi dignissimos excepturi explicabo! Neque enim at corporis veniam
        inventore fuga!
      </P>
    </div>
  );
}
