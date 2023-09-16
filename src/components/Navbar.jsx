import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/postCard">Post Cards</Link>
      --------------------------------------
      <Link to="/commentCard">Comment Cards</Link>
    </div>
  );
};

export default Navbar;
