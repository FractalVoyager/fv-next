"use client";
import { Button } from "react-bootstrap";
export default function DownloadDataBtn({ data }) {
  const convertToBitArray = (pixelData) => {
    const bitArray = [];
    for (let i = 0; i < pixelData.length; i += 4) {
      const isBlack =
        pixelData[i] === 0 && pixelData[i + 1] === 0 && pixelData[i + 2] === 0;
      bitArray.push(isBlack ? 1 : 0);
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
  const getLengthBytes = (length) => {
    // Calculate the number of bytes needed to store the length
    // const numBytes = Math.ceil(Math.log2(length + 1) / 8);

    // Create a Uint8Array with the calculated number of bytes
    const lengthBytes = new Uint8Array(2);
    lengthBytes[0] = (length >> 8) & 0xff; // Most significant byte
    lengthBytes[1] = length & 0xff; // Least significant byte
    return lengthBytes;

    // Store the length in the byte array
    for (let i = 0; i < numBytes; i++) {
      lengthBytes[i] = (length >> (8 * (numBytes - 1 - i))) & 0xff;
    }

    return lengthBytes;
  };
  const flattenUint8ClampedArray = (array) => {
    // Convert Uint8ClampedArray to a regular array
    return Array.from(array);
  };

  const flattenJuliaSets = (juliaSets) => {
    return juliaSets.flatMap((item) => flattenUint8ClampedArray(item));
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
    console.log(data.length, "full len");
    console.log(data[0].length, "first len");
    console.log(data[0]);
    // data is array of julia sets
    const bitArr = flattenJuliaSets(data);
    console.log(bitArr.length, "bit arr len");
    // const bitArray = convertToBitArray(data.data);
    const byteArr = packBitsIntoBytes(bitArr);
    console.log(byteArr.length, "byte arr len");
    const lengthByte = getLengthBytes(
      Math.sqrt(flattenUint8ClampedArray(data[0]).length)
    ); // Get the length byte
    console.log(lengthByte, "len bye");

    const combinedArray = new Uint8Array(byteArr.length + lengthByte.length);
    combinedArray.set(byteArr, 0);
    combinedArray.set(lengthByte, byteArr.length);
    console.log(combinedArray.length, "combed arr len");

    downloadBinaryFile(combinedArray);
  };

  return (
    <Button onClick={() => handleDownload()}>
      Download array of image data as JSON
    </Button>
  );
}
