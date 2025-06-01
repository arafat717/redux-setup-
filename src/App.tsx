import TodoContainer from "./components/todo/TodoContainer";
import Container from "./components/ui/Container";

function App() {
  return (
    <div>
      <Container>
        <h1 className="text-center text-3xl font-semibold mt-10">My Todos</h1>
        <TodoContainer></TodoContainer>
      </Container>
    </div>
  );
}

export default App;
