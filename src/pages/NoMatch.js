import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <h1>No Match</h1>
      <Link to="/">Go to homepage</Link>
    </div>
  );
}

export default NoMatch;
