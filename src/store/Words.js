import { createSlice } from "@reduxjs/toolkit";
import list from "../assets/data/list.json";

const initialState = {
    data: list
}

const WordsSlise = createSlice({
    name: "words",
    initialState,
    reducers: {
        AddWord(state, action) {
            const ans = action.payload;
            if (typeof ans === "object") {
                const [prev, next] = [...ans];
                const res = state.data.filter(el => el.toLowerCase() === next.toLowerCase())
                if (!res.length) {
                    state.data = state.data.map(el => {
                        el.toLowerCase() === prev.toLowerCase() && (el = next)
                        return el;
                    })
                }
            } else {
                const res = state.data.filter(el => el.toLowerCase() === action.payload.toLowerCase())
                if (!res.length) {
                    state.data.push(action.payload)
                }
            }
        },
        DelWord(state, action) {
            state.data = state.data.filter(el => el.toLowerCase() !== action.payload.toLowerCase())
        }
    }
})

export const { AddWord, DelWord } = WordsSlise.actions;

export default WordsSlise.reducer;