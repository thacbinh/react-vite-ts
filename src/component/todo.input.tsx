import { useState } from "react";

interface IProps {
    name?: string
}

const TodoInput = (props: IProps) => {
    // const { name = "please input" } = props;
    const [todo, setTodo] = useState<string>("");
    // const [todo, setTodo] = useState<number>(0);
    return (
        <div style={{ marginBottom: 10, display: "flex", gap: 15 }}>
            <input type="text" />
            <button>Add</button>
        </div>
    );
}
export default TodoInput;