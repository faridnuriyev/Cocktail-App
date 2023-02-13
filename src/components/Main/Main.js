import { useEffect } from "react";

import List from "../List/List";
import Filter from "../Filter/Filter";
import Random from "../Random/Random";

function Main({cocktailShow}) {

    useEffect(() => {
        document.title = "Home"
      })

    return (
        <main className="py-3">
            <Random />
            <Filter />
            <List cocktailShow={cocktailShow} />
        </main>
    );
  }
  
  export default Main;