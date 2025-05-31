import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div className="text-center mt-10">
      <button
        className="border bg-slate-800 text-white p-5 rounded-lg"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="border bg-slate-800 text-white p-5 rounded-lg"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <h1 className="text-3xl mx-10">{count}</h1>
      <button
        className="border bg-slate-800 text-white p-5 rounded-lg"
        onClick={() => dispatch(incrementByValue(5))}
      >
        IncrementByFive
      </button>
    </div>
  );
}

export default App;
