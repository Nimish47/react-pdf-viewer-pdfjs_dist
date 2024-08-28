import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

// Configure the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const PDFViewer = ({ base64Data }) => {
  // Decode the Base64 string into a Uint8Array
  const binaryString = window.atob(base64Data);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  
  const pdfData = new Uint8Array(bytes);

  return (
    <div>
      <Document
        file={{ data: pdfData }}
        onLoadSuccess={({ numPages }) => console.log(`Loaded ${numPages} pages`)}
      >
        <Page pageNumber={1} />
        {/* You can add more Page components here if needed */}
      </Document>
    </div>
  );
};

export default PDFViewer;
