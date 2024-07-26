"use client";
import { Button } from "react-bootstrap";
export default function DownloadDataBtn({ data }) {
  const handleDownload = () => {
    const json = JSON.stringify(data);

    const blob = new Blob([json], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "data.json";
    link.href = url;
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
    // TODO - need to do this step in other download to prevent duplicate downloads
    document.body.removeChild(link);
  };

  return (
    <Button onClick={() => handleDownload()}>
      Download array of image data as JSON
    </Button>
  );
}
