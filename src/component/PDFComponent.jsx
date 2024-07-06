import Header from './Header'
import Body from './Body'
import styles from './PDFComponent.module.css'

function PDFComponent() {
    return (
        <>
            <div className={styles.headerPDF}>
                <Header />
            </div>
            <div className={styles.bodyPDF}>
                <Body />
            </div>
        </>
    );
}

export default PDFComponent;
