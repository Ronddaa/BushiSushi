import { Routes, Route, } from "react-router-dom";
// import { useEffect } from "react";
import MainPage from "./components/MainPage/MainPage.jsx";
import Cars from "./components/CARS/Cars.jsx";

export default function App() {

  // const ScrollToTop = () => {
  //   const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  //   return null;
  // };

  return (
    <>
      {/* <ScrollToTop /> */}

      <Routes>
        {/* <Route path="/" element={<TechnicalWindow />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/bushicars" element={<Cars />} />
      </Routes>
    </>
  );
}
