"use client";
import TextField from "@mui/material/TextField";

const InputLabel = ({ label }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      sx={{
        "& .MuiInputBase-input": {
          color: "#ffffff",
          border: "none",
          backgroundColor: "#314355",
        },
        "& .MuiInputLabel-root": {
          color: "#fff",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          color: "#00b87b",
          border: "1px solid #00b87b",
        },
      }}
      // Add any other desired props or customization options
    />
  );
};

export default InputLabel;
