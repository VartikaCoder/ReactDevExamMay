import React, { useState } from "react";
import { Button } from "@mui/material";

const testArr = [21, 42, 54, 1, 87, 190, 56, 27, 89];
export default function Mapping() {
  const [firstNum, setFirstNum] = useState(testArr.slice(0, 3));
  const [index, setIndex] = useState(1);
  const boxOne = () => {
    if (index >= 1) {
      setFirstNum(testArr.slice(index - 1, index + 2));
      setIndex(index - 1);
    } else {
      alert("Cannot go back!!!");
    }
  };
  const boxTwo = () => {
    if (index < testArr.length - 2) {
      setFirstNum(testArr.slice(index, 3 + index));
      setIndex(index + 1);
    } else {
      alert("Cannot go ahead!!!");
    }
  };
  return (
    <div>
      <Button variant="contained" onClick={boxOne}  >
        Prev
      </Button>
      <Button variant="contained" sx={{ m: 3 }} onClick={boxTwo} >
        Next
      </Button>
      <div sx={{ m: 2 }}>
        {firstNum.map((item, i) => (
          <Button variant="contained" key={i} sx={{ m: 1 }}>
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}