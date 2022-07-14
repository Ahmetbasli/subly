import React, { useEffect } from "react";
import api from "./infrastructure/services/api";

function App() {
  useEffect(() => {
    (async () => {
      const res = await api.MediaItems.getAll();
      console.log(res);
    })();
  });
  return <div>hello world</div>;
}

export default App;
