import { useState } from 'react';
import styles from './App.module.css'
import Home from './component/Home';
import PDFContainer from "./component/PDFContainer";

function App() {

  const [toggle, setToggle] = useState(false)
  const toggleFunc = () => { setToggle(!toggle) }

  return (
    <div className={styles.container}>
      <div
        className={styles.home}
        onClick={toggleFunc}
      >
        <Home />
      </div>
      {toggle && (<div className={styles.pdfContainer}>
        <PDFContainer />
      </div>)
      }
    </div>
  );
}

export default App;
