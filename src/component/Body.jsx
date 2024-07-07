import { useEffect, useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import base64Data from '../assets/base64/pdf.json'
// import styles from './Body.module.css'

function Body() {

  const [pdfUrl, setPdfUrl] = useState()

  useEffect(() => {
    // compute ArrayBuffer from PDF's base64 data
    const res1 = computeBase64ToArrayBuffer(base64Data.file.data)

    // compute PDF URL from PDF's ArrayBuffer data
    const res2 = computeArrayBufferToPdfURL(res1)

    // set PDF URL in state
    setPdfUrl(res2)
  }, [])

  // compute ArrayBuffer from PDF's base64
  const computeBase64ToArrayBuffer = (base64) => {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  // compute PDF URL from ArrayBuffer
  const computeArrayBufferToPdfURL = (arraybufferdata) => {
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

export default Body;
