import { useContext } from "react";
import { ThemeContext } from "./context";

const ThemedButtonUseHook = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      {...props}
      style={{
        color: theme.foreground,
        backgroundColor: theme.background,
      }}
    />
  );
};
export { ThemedButtonUseHook };
