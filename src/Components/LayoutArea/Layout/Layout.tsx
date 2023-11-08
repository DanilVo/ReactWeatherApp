import { useState } from "react";
import Favorite from "../../MainArea/Favorite/Favorite";
import Home from "../../MainArea/Home/Home";
import Header from "../Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
  const [page, setPage] = useState<string>('Home');

  return (
    <div className="Layout">
      <header>
        <Header page={page} setPage={setPage} />
      </header>
      <main>
        {page === "Home" ? <Home></Home> : <Favorite></Favorite>}
      </main>
    </div>
  );
}

export default Layout;
