import { configureStore } from "@reduxjs/toolkit";
import Words from "./Words";

export default configureStore({
    reducer: {
        "words": Words
    }
})