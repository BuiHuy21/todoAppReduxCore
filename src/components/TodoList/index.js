import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoRemaining } from "../../redux/selectors";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todo = useSelector(todoRemaining);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setTodoName(e.target.value);
  };

  const handleSelectChange = (value) => {
    // console.log(value);
    setPriority(value);
  };

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setPriority("Medium");
    setTodoName("");
    //dispatch
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todo.length > 0 &&
          todo.map((item) => {
            return (
              <Todo
                name={item.name}
                key={item.id}
                priority={item.priority}
                completed={item.completed}
                id={item.id}
              />
            );
          })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleSelectChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
