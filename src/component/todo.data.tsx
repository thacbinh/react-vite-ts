interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    author?: string;
};

// type TProps = {
//     todos: {
//         id: number;
//         title: string;
//         isComplete: boolean;
//     }[];
//     author: string;
// }


const TodoData = (props: IProps) => {
    const { todos, author = "unkno" } = props;
    return (
        <>
            <div>{author}</div>
            {todos.map((todo) => {
                return (
                    <div style={{ padding: "10px 0" }}>
                        {todo.id} - {todo.title}
                        &nbsp;&nbsp;&nbsp;<button>Delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default TodoData;