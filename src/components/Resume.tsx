import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const pdf = new URL('../Assets/Ahmed-Abdulhuy-rusem.pdf', import.meta.url)

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
    "https://raw.githubusercontent.com/ahmed-abdulhuy/Portfolio/main/src/Assets/Ahmed-Abdulhuy-rusem.pdf"


function Resume() {
    const [width, setWidth] = useState(1200);

    const handelResumeDownload = () => {
        window.open(pdf, '_blank')
    }

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);


    return (
        <div className="container resume-container ">
            <div>
                <button
                    className="btn-cv shadow"
                    onClick={handelResumeDownload}
                >
                    &nbsp;Download CV
                </button>
            </div>

            <Document file={resumeLink}>
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            </Document>

            <div>
                <button
                    className="btn-cv shadow"
                    onClick={handelResumeDownload}
                >
                    &nbsp;Download CV
                </button>

            </div>
        </div>
    );
}

export default Resume;
