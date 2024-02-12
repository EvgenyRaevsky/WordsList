import { Routes, Route } from "react-router";
import Home from "./pages/WordsHome";
import Word from "./pages/Word";
import List from "./pages/WordsList";
import "./App.css";

export default () => {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/letter/:name" element={<List />} />
                <Route path="/word/:name" element={<Word />} />
            </Routes>
        </div>
    );
}
