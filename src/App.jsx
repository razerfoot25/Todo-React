import { useState, useEffect } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [LightTheme, setLightTheme] = useState(false);
  let myId = uuidv4();
  const [Todos, setTodos] = useState([
    {
      id: 1,
      title: "Jog around the park 3x",
      completed: true,
    },
    {
      id: 2,
      title: "Read for 1 hour",
      completed: false,
    },
  ]);
  const [TodoFilter, setTodoFilter] = useState([]);
  const [FilterType, setFilterType] = useState(1);

  useEffect(() => {
    function OnChangeTodoFilter() {
      if (FilterType === 1) {
        return setTodoFilter([...Todos]);
      } else if (FilterType === 2) {
        return setTodoFilter(Todos.filter((todo) => todo.completed === false));
      } else if (FilterType === 3) {
        return setTodoFilter(Todos.filter((todo) => todo.completed === true));
      }
    }
    OnChangeTodoFilter();
  }, [Todos, FilterType]);

  function handleThemeChange() {
    setLightTheme(!LightTheme);
  }
  function handleCreate(todo, status) {
    setTodos([
      ...Todos,
      {
        id: myId,
        title: todo,
        completed: status,
      },
    ]);
  }

  function handleStatus(id) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  }

  function handleDelete(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function handleClearComplete() {
    setTodos((ClearTodo) => {
      return ClearTodo.filter((Ctodo) => Ctodo.completed === false);
    });
  }

  return (
    <div
      className={
        LightTheme ? "app container light lightImg" : "app container darkImg"
      }
    >
      <Header lightTheme={LightTheme} themeChange={handleThemeChange} />
      <Todo
        lightTheme={LightTheme}
        todos={TodoFilter}
        OnCreate={handleCreate}
        OnComplete={handleStatus}
        OnDelete={handleDelete}
      />
      <Footer
        lightTheme={LightTheme}
        Items={TodoFilter.length}
        onChangeFilter={setFilterType}
        onClearTodo={handleClearComplete}
      />
    </div>
  );
}

export default App;
