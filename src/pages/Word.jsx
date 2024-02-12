import { useParams } from "react-router";

export default function Word() {
    const {name} = useParams();
    return (
        <div className="word-center">
            <p>{name}</p>
        </div>
    )
}