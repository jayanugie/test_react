//ES = EcmaScript => Standard yang diikuti perkembangan javascript

//Style import ES6 
import React, { useState } from "react";

function Hello(props) {
  //Variabel harus dibuat diluar return

  //Tergantung Nama props
  const { type } = props;

  //cara singkat 
  //count = isi state nya. 
  //setCount = fungsi yang dipanggil untuk mengubah count
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count + 1);
  }

  return (
    //Fragment 
    //Harus 1 element
    <>
      <h3>{type}</h3>
      <p>Total Klik  <strong>{count}</strong> </p>
      <button className="btn" onClick={handleOnClick}>Klik</button>
    </>
  );
}

//Style export ES6
export default Hello;