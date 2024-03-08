import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Analysis from "../views/analysis/index.tsx";
type Props = {};

export default function MainLayout({}: Props) {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Analysis />}></Route>
      </Routes>
    </div>
  );
}
