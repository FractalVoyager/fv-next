"use client";
import { Button } from "react-bootstrap";
export default function DownloadDataBtn({ data }) {
  const convertToBitArray = (pixelData) => {
    const bitArray = [];
    for (let i = 0; i < pixelData.length; i += 4) {
      const isBlack =
        pixelData[i] === 0 && pixelData[i + 1] === 0 && pixelData[i + 2] === 0;
      bitArray.push(isBlack ? 0 : 1);
    }
    return bitArray;
  };

  const packBitsIntoBytes = (bitArray) => {
    const byteArray = new Uint8Array(Math.ceil(bitArray.length / 8));
    for (let i = 0; i < bitArray.length; i++) {
      const byteIndex = Math.floor(i / 8);
      const bitIndex = i % 8;
      if (bitArray[i] === 1) {
        byteArray[byteIndex] |= 1 << (7 - bitIndex); // Pack bits into bytes, MSB first
      }
    }
    return byteArray;
  };

  const downloadBinaryFile = (byteArray) => {
    const blob = new Blob([byteArray], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "pixelData.bin";
    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const handleDownload = () => {
    const bitArray = convertToBitArray(data.data);
    const byteArray = packBitsIntoBytes(bitArray);
    downloadBinaryFile(byteArray);
  };

  return (
    <Button onClick={() => handleDownload()}>
      Download array of image data as JSON
    </Button>
  );
}
