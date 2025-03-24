import { Link, useNavigate } from "react-router";
import "./App.css";
import Routing from "./routing";

function App() {
  const navigate = useNavigate()
  return (
    <>
    <header>
      <Link to="/blog">Blog</Link>
      <Link to="/blog/blog-details">Blog details</Link>
      <Link to="/contact">Contact us</Link>
      <span style={{ cursor: 'pointer'}} onClick={() => navigate('/about')}>About</span>
    </header>
      <Routing />
    </>
  );
}

export default App;
