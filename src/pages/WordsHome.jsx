import { Link } from "react-router-dom";
import alphabet from "../assets/data/alphabet.json";
import { useDispatch, useSelector } from "react-redux";
import { AddWord, DelWord } from "../store/Words";
import del from "../assets/images/del.svg";
import edit from "../assets/images/edit.svg";
import add from "../assets/images/add.svg";
import ok from "../assets/images/ok.svg";
import cancel from "../assets/images/cancel.svg";
import { useState } from "react";
import Input from "../components/Input";

export default function App() {
    const [activeLine, setActiveLine] = useState(false);
    const [newWord, setNewWord] = useState("");
    const [prevWord, setPrevWord] = useState("");
    const words = useSelector(state => state.words);
    const dispatch = useDispatch();

    const addWords = () => {
        const res = words.data.filter(el => el.toLowerCase() === newWord.toLowerCase())
        if (prevWord.length > 0) {
            if (prevWord !== newWord && !res.length) {
                dispatch(AddWord([prevWord, newWord[0].toUpperCase() + newWord.slice(1).toLowerCase()]));
                Cancel();
            }
        } else if (/^[A-Za-z]/g.test(newWord) && !res.length) {
            dispatch(AddWord(newWord[0].toUpperCase() + newWord.slice(1).toLowerCase()));
            Cancel();
        }
    }

    const delWords = (el) => {
        dispatch(DelWord(el))
    }

    const editWord = (el) => {
        setPrevWord(el);
        setNewWord(el);
        setActiveLine(true);
    }

    const Cancel = () => {
        setActiveLine(false);
        setPrevWord("");
        setNewWord("");
    }

    return (
        <>
            <h1 className="list-title">The list of words</h1>
            <ul className="list-wrapper list-wrapper_alphabet">
                {alphabet.map((el, i) =>
                    <li key={i}>
                        <Link to={`/letter/${el}`}>{el}</Link>
                    </li>
                )}
            </ul>
            {!activeLine && <span className="list-btn list-btn_add" onClick={() => setActiveLine(true)}><img src={add} alt="Add" /></span>}
            {activeLine && <Input
                newWord={newWord}
                setNewWord={setNewWord}
            >
                <span className="list-btn"><img src={ok} alt="Ok" onClick={() => addWords()} /></span>
                <span className="list-btn"><img src={cancel} alt="Cancel" onClick={() => Cancel()} /></span>
            </Input>}
            <ul className="list-wrapper">
                {words.data.map((el, i) =>
                    <li key={i}>
                        <span className="list-btn" onClick={() => editWord(el)}><img src={edit} alt="Edit" /></span>
                        <span className="list-btn" onClick={() => delWords(el)}><img src={del} alt="Delete" /></span>
                        <Link to={`/word/${el}`}>{el}</Link>
                    </li>
                )}
                {words.data.length === 0 && <span className="None">None</span>}
            </ul>
        </>
    )
}