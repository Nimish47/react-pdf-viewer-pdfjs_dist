import { useEffect, useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import base64Data from '../assets/base64/pdf.json'

function PDFContainer() {

  const [pdfUrl, setPdfUrl] = useState()

  useEffect(() => {
    // convert PDF's base64 data to an ArrayBuffer data
    const res1 = convertBase64ToArrayBuffer(base64Data.file.data)

    // compute PDF URL from PDF's ArrayBuffer data
    const res2 = computePdfURLFromArrayBuffer(res1)

    // set PDF URL in state
    // this URL will be used in Viewer component
    setPdfUrl(res2)
  }, [])

  // convert PDF's base64 data to an ArrayBuffer data
  const convertBase64ToArrayBuffer = (base64) => {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  // compute PDF URL from ArrayBuffer
  const computePdfURLFromArrayBuffer = (arraybufferdata) => {
    const blob = new Blob([arraybufferdata], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    return url
  }

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        {pdfUrl && (<Viewer fileUrl={pdfUrl} />)}
      </Worker>
    </>
  );
}

export default PDFContainer;
