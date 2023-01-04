import React from "react";
// Screens
import Landing from "./screens/Landing.jsx";
import PriceRequest from "./screens/PriceRequest.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TopNavbar from "./components/Nav/TopNavbar";
import GetPriceNav from "./components/Nav/GetPriceNav";
export default function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}  ></Route>
                <Route path="/price" element={
                    <>
                    <GetPriceNav />

                    <PriceRequest/>
                    </>
                }  ></Route>

            </Routes>




        </BrowserRouter>

    </>
  );
}

