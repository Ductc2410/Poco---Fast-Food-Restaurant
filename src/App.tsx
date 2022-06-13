import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ClientLayout from "./layouts/client.layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<ClientLayout />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
