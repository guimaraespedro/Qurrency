import { useState } from "react";
import logo from "../assets/Logo.svg";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <header className={styles.header}>
        <img src={logo} alt="App logo" />
      </header>
      <div className={styles.contentContainer}>
        <div className={styles.actionsContainer}>
          <input placeholder="Search your currency here..." type="text" />
          <button>Search</button>
        </div>
        <div className={styles.currencyDisplayer}>
          <div className={styles.card}>
            <p>USD</p>
            <p>$5,00</p>
          </div>
          <div className={styles.card}>
            <p>USD</p>
            <p>$5,00</p>
          </div>
          <div className={styles.card}>
            <p>USD</p>
            <p>$5,00</p>
          </div>
          <div className={styles.card}>
            <p>USD</p>
            <p>$5,00</p>
          </div>
          <div className={styles.card}>
            <p>USD</p>
            <p>$5,00</p>
          </div>
          <div className={styles.card}>
            <p>USD</p>
            <p>$5,00</p>
          </div>
          <div className={styles.card}>
            <p>USD</p>
            <p>$5,00</p>
          </div>
          <div className={styles.card}>
            <p>USD</p>
            <p>$5,00</p>
          </div>
          <div className={styles.card}>
            <p>USD</p>
            <p>$5,00</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
