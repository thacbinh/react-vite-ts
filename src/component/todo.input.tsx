interface IProps {
    name?: string
}

const TodoInput = (props: IProps) => {
    const { name = "please input" } = props;
    return (
        <div style={{ marginBottom: 10, display: "flex", gap: 15 }}>
            <input value={name} type="text" />
            <button>Add</button>
        </div>
    );
}
export default TodoInput;