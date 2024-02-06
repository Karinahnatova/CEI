import "./ToDoList.css";

const ToDoList = ({deber}) => {
    return (
      <>
      <li><input type="checkbox" name="deber" id="deber" />{deber}</li>
      </>
    )

  } 

export default ToDoList;
