import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMovieScreen from "./screens/AddMovieScreen";
import PlanScreen from "./screens/PlanScreen";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add' element={<AddMovieScreen />} />
        <Route path='/' element={<PlanScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
