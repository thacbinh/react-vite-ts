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
                    <div key={todo.id}>
                        {todo.title}
                    </div>
                )
            })}
        </>
    )
}

export default TodoData;