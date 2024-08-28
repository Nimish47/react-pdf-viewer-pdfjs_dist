import base64Data from '../assets/base64/pdf.json'
import styles from './PDFContainer.module.css'
import PDFViewer from './PDFViewer';

function PDFContainer({ toggleHandler }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div
          onClick={toggleHandler}
          className={styles.toggler}
        >
          <span>Click here to close the PDF window</span>
        </div>
        <PDFViewer base64Data={base64Data.file.data} />
      </div>
    </div>
  );
}

export default PDFContainer;
