import Button from "./Button";
import styles from "./App.module.css"

function App() {
  return (
    <div>
      <h2 className={styles.title}>Welcome back React!!!</h2>
      <Button text={"Click me"}/>
    </div>
  );
}

export default App;
