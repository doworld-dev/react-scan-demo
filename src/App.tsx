import { scan } from "react-scan";
import { UserList as InefficientList } from "./components/UserList";
import { OptimizedUserList } from "./components/OptimizedUserList";
import "./App.css";

function App() {
  scan(); // 함수로 호출

  return (
    <div className="app">
      <h1>React Scan 성능 테스트</h1>

      <div className="comparison">
        <section className="inefficient">
          <h2>비효율적인 구현</h2>
          <InefficientList />
        </section>

        <section className="efficient">
          <h2>최적화된 구현</h2>
          <OptimizedUserList />
        </section>
      </div>
    </div>
  );
}

export default App;
