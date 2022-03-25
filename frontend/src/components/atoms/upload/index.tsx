import * as React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "../typography";
import theme, { EXTRA_COLORS } from "../../../theme";

type UploadButtonProps = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onChange?: any;
};

const Input = styled("input")({
  display: "none",
});

const useStyles = makeStyles({
  UploadButtonStyle: {
    textTransform: "none",
    textAlign: "center",
    backgroundColor: EXTRA_COLORS.background,
    borderColor: theme.palette.primary.main,
    border: "2px dashed",
    borderRadius: "12px",
    height: "292px",
    width: "592px",
  },
});

export default function UploadButton(props: UploadButtonProps) {
  const classes = useStyles();

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      data-testid="UploadResume"
    >
      <Button
        className={classes.UploadButtonStyle}
        variant="outlined"
        component="span"
      >
        <label htmlFor="contained-button-file">
          <Button onClick={props.onClick} variant="contained" component="span">
            <input 
              type="file" 
              id="contained-button-file"
              name="file"
              onChange={props.onChange}
            />
            <Typography variant="h2">{props.children}</Typography>
          </Button>
        </label>
      </Button>
    </Stack>
  );
}
