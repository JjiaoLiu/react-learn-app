import { Link } from "react-router-dom";
import ThemeContextConsumer from "./ThemeContextConsumer";

const About = () => {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <div>this is About page.</div>
      <ThemeContextConsumer />
    </div>
  );
};
export default About;
