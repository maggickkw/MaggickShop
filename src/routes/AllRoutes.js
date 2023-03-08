import { Routes, Route } from "react-router-dom";
import { Cart } from "../pages";
import { Home } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <main>
        <Routes>
                  <Route path="" element={<Home />}  end />
                  <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
};
