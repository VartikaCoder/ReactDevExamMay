import React, { useState, useRef, useEffect } from "react";
import { Box, TextField } from "@mui/material";

export default function AddSum() {
  const [figure1, setFigure1] = useState("");
  const [figure2, setFigure2] = useState("");

  function handleFigure1(event) {
    const value = parseInt(event.target.value);

    if (value <= 101) {
      setFigure1(value);
      setFigure2(100 - value);
    }
  }

  function handleFigure2(event) {
    const value = parseInt(event.target.value);

    if (value <= 101) {
      setFigure2(value);
      setFigure1(100 - value);
    }
  }
  return (
    <div>
      <Box component="form">
        <TextField
          label="First"
          variant="outlined"
          value={figure1}
          onChange={handleFigure1}
        />
        <TextField
          label="Second"
          variant="outlined"
          value={figure2}
          onChange={handleFigure2}
        />
        <TextField
          id="outlined-basic"
          label="Result"
          variant="outlined"
          value="100"
          name="result"
          type="number"
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
    </div>
  );
}
