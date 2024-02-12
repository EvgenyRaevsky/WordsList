import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function List() {
    const { name } = useParams();
    const words = useSelector(state => state.words)
    return (
        <>
            <h1 className="list-title">{`Letter "${name}"`}</h1>
            <ul className="list-wrapper">
                {words.data
                    .filter(el => el[0].toLowerCase() === name.toLowerCase())
                    .sort()
                    .map((el, i) =>
                        <li key={i}>
                            <Link to={`/word/${el}`}>{el}</Link>
                        </li>
                    )}
                {words.data.filter(el => el[0].toLowerCase() === name.toLowerCase()).length === 0 && <span className="None">None</span>}
                <span className="separator">{`Words containing the letter "${name}"`}</span>
                {words.data
                    .filter(el => el[0].toLowerCase() !== name.toLowerCase())
                    .filter(el => el.toLowerCase().includes(name.toLowerCase()))
                    .sort()
                    .map((el, i) =>
                        <li key={i}>
                            <Link to={`/word/${el}`}>{el}</Link>
                        </li>
                    )}
                {words.data
                    .filter(el => el[0].toLowerCase() !== name.toLowerCase())
                    .filter(el => el.toLowerCase().includes(name.toLowerCase())).length === 0 && <span className="None">None</span>}
            </ul>
        </>
    )
}