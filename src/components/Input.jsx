import "./Input.css";

export default function Input({ children, newWord, setNewWord }) {
    return (
        <div className="input-wrapper">
            <input
                type="text"
                placeholder="Add word"
                value={newWord}
                onChange={(e) => setNewWord(e.target.value)}
            />
            {children}
        </div>
    )
}