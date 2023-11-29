import { selectProps } from "@/interface/commonAll.interfaces";
import { primaryColors } from "@/themes/_muiPalette";

import styled from "@emotion/styled";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import React from "react";

export const CommonSelectFieldWrapper = styled(Box)`
  .MuiInputBase-root {
    height: auto;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: ${primaryColors.white};
    border-radius: 5px;
    padding: 11px 16px;
    min-height: 60px;
    border: 1px solid ${primaryColors?.border_primary};
    background: ${primaryColors?.white};
    fieldset {
      display: none;
    }
    .MuiSelect-select {
      padding: 12px 0 0 0 !important;
      color: ${primaryColors?.textPrimaryColor};
    }
  }
  .MuiFormLabel-root {
    color: ${primaryColors?.textPrimaryColor};
    font-size: 13px;
    font-weight: 400;
    left: 3px;
    top: 4px;
    &.MuiInputLabel-shrink {
      transform: translate(14px, 2px) scale(1);
      color: ${primaryColors?.textPrimaryColor};
    }
  }
  
`;


export default function CommonSelectField({
  lebelTxt,
  menuListProps
}: selectProps) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAge(event.target.value);
  };
  return (
    <CommonSelectFieldWrapper className="simpleSectionWrap">
      <Box sx={{ minWidth: 120 }} className="simple_selectWrap">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{lebelTxt}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {menuListProps.map((items) => (
              <MenuItem value={items.value}>{items.menuItems}</MenuItem>
            ))}
          
          </Select>
        </FormControl>
      </Box>
    </CommonSelectFieldWrapper>
  );
}
