import { useState } from "react";

interface IProps {
    name?: string;
}

const TodoInput = (props: IProps) => {
    const [todo, setTodo] = useState<string>("");

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    const handleClick = () => {
        console.log(todo)
    }

    return (
        <div style={{ display: "flex", gap: 15, marginBottom: 20 }} >
            <input
                type="text"
                onChange={handleTextChange}
            />
            <button onClick={handleClick}>Add todo</button>
        </div >
    )
}

export default TodoInput;