import React, { useState } from "react";

const ImageForm = () => {
  const [img, setImg] = useState("");
  const [err, setErr] = useState('')

  const imgTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/JPG']

  const imgUploadHandler = (e) => {
      let selected = e.target.files[0]
    if (selected && imgTypes.includes(selected.type)) {
      setImg(e.target.files[0]);
      setErr(null)
    } else {
        setImg(null)
        setErr('Please upload valid file format: png, jpg, jpeg')
        console.log(err)
    }
  };
 
  return (
    <form>
      <input type="file" onChange={imgUploadHandler} />
      {err && <div>{err}</div>}
    </form>
  );
};

export default ImageForm;
