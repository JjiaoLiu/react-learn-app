import { ThemeContext } from "./context";

const ThemeContextConsumer = (props) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return <div>this is ThemeContextConsumer page. {theme.name}</div>;
      }}
    </ThemeContext.Consumer>
  );
};
export default ThemeContextConsumer;
