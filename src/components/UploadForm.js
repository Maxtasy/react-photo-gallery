import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const allowedFileTypes = ["image/jpeg", "image/png"];

  function handleChange(e) {
    const selected = e.target.files[0];
    const fileType = selected.type;
    
    if (selected && allowedFileTypes.includes(fileType)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (.png or .jpeg)");
    }
  }

  return (
    <form>
      <label
        htmlFor="upload"
        className="upload-label"
      >
      </label>
      <input 
        name="upload"
        id="upload"
        className="upload"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
      />
      <div className="output">
        { error && <div className="error">{error}</div> }
        { file && <div>Uploading: {file.name}</div> }
        { file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default UploadForm;
