import React from "react";
import TodoCard from "./TodoCard";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import ToDoFilter from "./ToDoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <AddTodoModal></AddTodoModal>
        <ToDoFilter></ToDoFilter>
      </div>
      <div className="bg-red-500 h-full p-5 rounded-lg space-y-3">
        {/* <div className="text-center bg-white text-xl py-3 rounded-lg">
          <h1>There is no task pending</h1>
        </div> */}
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
      </div>
    </div>
  );
};

export default TodoContainer;
