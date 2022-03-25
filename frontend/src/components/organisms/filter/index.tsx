import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "../../atoms/typography/index";
import Radio from "@mui/material/Radio";
import Button from "../../atoms/button/index";
import {
  distances,
  experienceLevel,
  datePosted,
  jobType,
  transport,
  greenCommutes,
} from "../../../constants";
import { Controller, useForm } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Grid,
  Box,
  RadioGroup,
} from "@mui/material";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  children?: React.ReactNode;
  onClose: () => void;
}

const UpperBox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  paddingTop: "10px",
});

const BottomBox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  paddingTop: "24px",
  paddingLeft: "4px",
});

const StyledContent = styled(DialogContent)({
  height: "500px",
  width: "546px",
  background: "#FFFFFF",
  justifyContent: "space-around",
  paddingTop: "27px",
});

const BootstrapDialogTitle = ({
  children,
  onClose,
  ...other
}: DialogTitleProps) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2, background: "#FFFFFF" }} {...other}>
      {onClose ? (
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 1,
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          <CloseIcon data-testid="cross" />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const Filter = ({ handleEvent }: any) => {
  const [open, setOpen] = React.useState(false);

  const { handleSubmit, control } = useForm();

  const onSubmit = React.useCallback((data) => {
    setOpen(false);
    handleEvent(data);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="filter"
        startIcon={<FilterAltOutlinedIcon />}
        onClick={handleClickOpen}
      >
        Filter
      </Button>
      <BootstrapDialog onClose={handleClose} open={open} data-testid="dialog">
        <BootstrapDialogTitle onClose={handleClose} />
        <StyledContent>
          <form>
            <FormControl fullWidth component="fieldset" margin="normal">
              <UpperBox>
                <Box>
                  <FormGroup aria-label="Temas" row={false}>
                    <Typography variant="body1">Distance</Typography>
                    {distances.map(({ label, value }) => (
                      <FormControlLabel
                        value={label}
                        control={
                          <Controller
                            name={`distance[${value}]`}
                            control={control}
                            render={({ field }) => <Checkbox {...field} />}
                          />
                        }
                        label={<Typography variant="body2">{label}</Typography>}
                      />
                    ))}
                  </FormGroup>
                </Box>
                <Box>
                  <FormGroup aria-label="Temas" row={false}>
                    <Typography variant="body1">Date Posted</Typography>
                    {datePosted.map(({ label, value }) => (
                      <FormControlLabel
                        key={label}
                        value={label}
                        control={
                          <Controller
                            name={`datePosted[${value}]`}
                            control={control}
                            render={({ field }) => <Checkbox {...field} />}
                          />
                        }
                        label={<Typography variant="body2">{label}</Typography>}
                      />
                    ))}
                  </FormGroup>
                </Box>
                <Box>
                  <FormGroup aria-label="Temas" row={false}>
                    <Typography variant="body1">Green Commute</Typography>
                    <Controller
                      name={`greenCommutes`}
                      control={control}
                      defaultValue={true}
                      render={({ field }) => {
                        return (
                          <RadioGroup {...field}>
                            {greenCommutes.map(({ label, value }) => (
                              <FormControlLabel
                                key={label}
                                value={value}
                                label={
                                  <Typography variant="body2">
                                    {label}
                                  </Typography>
                                }
                                control={<Radio />}
                              />
                            ))}
                          </RadioGroup>
                        );
                      }}
                    />
                  </FormGroup>
                </Box>
              </UpperBox>
              <BottomBox>
                <Box>
                  <FormGroup aria-label="Temas" row={false}>
                    <Typography variant="body1">Job Type</Typography>

                    {jobType.map(({ label, value }) => (
                      <FormControlLabel
                        key={label}
                        value={label}
                        control={
                          <Controller
                            name={`jobType[${value}]`}
                            control={control}
                            render={({ field }) => <Checkbox {...field} />}
                          />
                        }
                        label={<Typography variant="body2">{label}</Typography>}
                      />
                    ))}
                  </FormGroup>
                </Box>
                <Box>
                  <FormGroup aria-label="Temas" row={false}>
                    <Typography variant="body1">Experience Level</Typography>

                    {experienceLevel.map(({ label, value }) => (
                      <FormControlLabel
                        key={label}
                        value={label}
                        control={
                          <Controller
                            name={`experienceLevel[${value}]`}
                            control={control}
                            render={({ field }) => <Checkbox {...field} />}
                          />
                        }
                        label={<Typography variant="body2">{label}</Typography>}
                      />
                    ))}
                  </FormGroup>
                </Box>
                <Box>
                  <FormGroup aria-label="Temas" row={false}>
                    <Typography variant="body1">Transport</Typography>

                    {transport.map(({ label, value }) => (
                      <FormControlLabel
                        key={label}
                        value={label}
                        control={
                          <Controller
                            name={`transport[${value}]`}
                            control={control}
                            render={({ field }) => <Checkbox {...field} />}
                          />
                        }
                        label={<Typography variant="body2">{label}</Typography>}
                      />
                    ))}
                  </FormGroup>
                </Box>
              </BottomBox>
            </FormControl>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "16px",
                paddingTop: "8px",
              }}
            >
              <Grid item>
                <Button variant="text">Clear all</Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleSubmit(onSubmit)}
                  variant={"contained"}
                  style={{ textTransform: "none" }}
                >
                  Apply
                </Button>{" "}
              </Grid>
            </Grid>
          </form>
        </StyledContent>
      </BootstrapDialog>
    </div>
  );
};

export default Filter;
