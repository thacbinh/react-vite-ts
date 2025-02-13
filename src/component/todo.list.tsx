import { useState } from "react"
import TodoData from "./todo.data"
import TodoInput from "./todo.input"

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

const TodoList = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([])
    const addTodo = (todo: ITodo) => {
        setTodoList([...todoList, todo])
    }
    return (
        <>
            <div style={{
                width: "600px",
                margin: "50px auto",
                border: "1px solid #ccc",
                borderRadius: 10,
                padding: 10
            }}>
                <div
                    style={{
                        padding: "10px 0",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                        borderBottomStyle: "solid"
                    }}
                >
                    My todo list:
                </div>
                <TodoInput
                    addTodo={addTodo}
                    name={"binh"}
                />
                <TodoData
                    todos={todoList}
                // author={"binh"}
                />
            </div>

        </>

    )
}

export default TodoList