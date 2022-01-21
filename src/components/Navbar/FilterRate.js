import { Rating } from "@mui/material";
import React from "react";

const FilterRate = ({ setRate, rate }) => {
  return (
    <div>
      <Rating
        name="simple-controlled"
        value={rate}
        onChange={(event, newValue) => {
          setRate(newValue);
        }}
      />
    </div>
  );
};

export default FilterRate;
