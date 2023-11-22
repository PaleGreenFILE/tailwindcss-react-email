"use client";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import { Checkbox, FormControl, TextField } from "@mui/material";

export const LinkStyled = styled(Link)`
  font-size: 0.875rem;
  text-decoration: none;
  color: transparent; /* This is equivalent to text-transparent */
  align-items: center;
  font-weight: 600;
  background: linear-gradient(
    to right,
    #e7b154,
    #f99827
  ); /* This is equivalent to bg-gradient-to-r from-[#E7D7B1] to-[#DAB365] */
  -webkit-background-clip: text; /* This is equivalent to bg-clip-text for webkit browsers */
  background-clip: text; /* This is equivalent to bg-clip-text */
  display: inline; /* This makes sure the component behaves like an inline element, similar to an anchor tag */
`;

export const FormControlLabel = styled(
  MuiFormControlLabel,
)<FormControlLabelProps>(() => ({
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    color: "#A19BB",
  },
}));

export const CssFormControl = styled(FormControl)({
  marginTop: 10,
  "& label.Mui-focused": {
    color: "#DAB365",
  },
  "& label": {
    color: "#A19BBB",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(161,155,187,0.5)", // 50% opacity
      borderRadius: "30px",
    },
    "&:hover fieldset": {
      borderColor: "rgb(161,155,187,0.7)", // 70% opacity
    },
    "&.Mui-focused fieldset": {
      borderColor: "#DAB365",
    },
    "& .MuiInputBase-input": {
      // Added style rule for input color
      color: "#FFFFFF", //
      borderRadius: "30px",
      backgroundColor: "#111111",
    },
  },
});

export const CssTextFields = styled(TextField)({
  "& label.Mui-focused": {
    color: "#DAB365",
  },
  "& label": {
    color: "#A19BBB",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(161,155,187,0.5)", // 50% opacity
      borderRadius: "30px",
      //backgroundColor: '#211E41'
    },
    "&:hover fieldset": {
      borderColor: "rgb(161,155,187,0.7)", // 70% opacity
    },
    "&.Mui-focused fieldset": {
      borderColor: "#DAB365",
    },
    "& .MuiInputBase-input": {
      // Added style rule for input color
      color: "#FFFFFF", //
      backgroundColor: "#111111",
      borderRadius: "30px",
    },
  },
});

export const CssTextFieldsProfile = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ffecb3",
  },
  "& label": {
    color: "#A19BBB",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(161,155,187,0.5)", // 50% opacity
      borderRadius: "12px",
    },
    "&:hover fieldset": {
      borderColor: "rgb(161,155,187,0.7)", // 70% opacity
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffecb3",
    },
    "& .MuiInputBase-input": {
      // Added style rule for input color
      color: "white",
      borderRadius: "30px",
    },
  },
});
export const CssTextFieldsPassword = styled(FormControl)({
  "& label.Mui-focused": {
    color: "#ffecb3",
  },
  "& label": {
    color: "#A19BBB",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(161,155,187,0.5)", // 50% opacity
      borderRadius: "12px",
    },
    "&:hover fieldset": {
      borderColor: "rgb(161,155,187,0.7)", // 70% opacity
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffecb3",
    },
    "& .MuiInputBase-input": {
      // Added style rule for input color
      color: "white", //

      borderRadius: "30px",
    },
  },
});
export const CssCheckbox = styled(Checkbox)(({ theme }) => ({
  display: "flex",
  fontSize: "0.875rem",
  alignItems: "center",
  textDecoration: "none",
  justifyContent: "center",
  color: "#9154F2",
  "&.Mui-checked": {
    color: "#7D53D6",
  },
}));
