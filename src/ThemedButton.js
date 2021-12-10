import { ThemeContext } from "./context";

const ThemedButton = (props) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <button
            {...props}
            style={{
              color: theme.foreground,
              backgroundColor: theme.background,
            }}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
};
export { ThemedButton };
