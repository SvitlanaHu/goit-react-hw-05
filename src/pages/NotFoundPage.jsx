import { Link } from "react-router-dom";
// import { styles } from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className="notFoundDiv">
      <h1>Opps, something went wrong</h1>
      <Link to="/">Back to home page</Link>
    </div>
  );
}