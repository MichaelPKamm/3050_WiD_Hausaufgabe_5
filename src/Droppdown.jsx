import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Droppdown = ({
  kantone_Liste,
  service_Liste,
  score_Liste,
  handleChange_L,
  handleChange_R,
  handleChange_score,
  dp_L,
  dp_R,
  dp_score,
}) => {
  return (
    <Box sx={{ minWidth: 300, display: "flex" }}>
      <FormControl fullWidth>
        <InputLabel id="service-select-label">Service</InputLabel>
        <Select
          labelId="service-select-label"
          id="service-select"
          value={dp_L}
          label="service"
          onChange={handleChange_L}
        >
          {service_Liste.map((element) => (
            <MenuItem value={element}>{element}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="kantone-select-label">Kanton</InputLabel>
        <Select
          labelId="kantone-select-label"
          id="kantone-select"
          value={dp_R}
          label="kanton"
          onChange={handleChange_R}
        >
          {kantone_Liste.map((element) => (
            <MenuItem value={element}>{element}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="score-select-label">Score</InputLabel>
        <Select
          labelId="score-select-label"
          id="score-select"
          value={dp_score}
          label="score"
          onChange={handleChange_score}
        >
          {score_Liste.map((element) => (
            <MenuItem value={element}>{element}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
