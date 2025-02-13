import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

interface IProps {
    name?: string
    addTodo: (value: ITodo) => void
}



const TodoInput = (props: IProps) => {
    const { addTodo } = props;
    const [todo, setTodo] = useState<string>("");

    // const [todo, setTodo] = useState<number>(0);

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }
    const handleClick = () => {
        if (!todo) {
            alert("empty input");
            return;
        }
        addTodo({
            id: randomInteger(1, 1000),
            title: todo,
            isComplete: false
        })
        setTodo("");
    }
    return (
        <div style={{ marginBottom: 10, display: "flex", gap: 15 }}>
            <input type="text" value={todo} onChange={handleOnChange} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}
export default TodoInput;