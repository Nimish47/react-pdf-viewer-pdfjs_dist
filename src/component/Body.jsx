import { useEffect, useState } from 'react';
// import styles from './Body.module.css'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import encodeData from '../assets/base64/pdf.json'

function Body() {

  const [data, setData] = useState()

  useEffect(() => {
    const res = base64ToArrayBuffer(encodeData.file.data)
    const blob = new Blob([res], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)

    setData(url)
  }, [])

  const base64ToArrayBuffer = (base64) => {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        {data && (<Viewer fileUrl={data} />)}
      </Worker>
    </>
  );
}

export default Body;
