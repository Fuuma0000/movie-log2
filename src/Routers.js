import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMovieScreen from "./screens/AddMovieScreen";
import HomeScreen from "./screens/HomeScreen";
import PlanScreen from "./screens/PlanScreen";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/add' element={<AddMovieScreen />} />
        <Route path='/plan' element={<PlanScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
