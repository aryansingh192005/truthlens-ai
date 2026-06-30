import { useState } from "react";

export default function useFileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
  }

  function clearFile() {
    setSelectedFile(null);
  }

  return {
    selectedFile,
    handleFileChange,
    clearFile,
  };
}