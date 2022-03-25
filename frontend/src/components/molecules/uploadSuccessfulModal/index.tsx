import * as React from "react";
import { Box } from "@mui/system";
import Icon from "../../atoms/icon/index";
import close from "../../../assets/icons/close.svg";
import success from "../../../assets/icons/success.svg";
import IconButton from "@mui/material/IconButton";
import TypographyTag from "../../atoms/typography/index";
import Button from "../../atoms/button/index";
import Grid from "@mui/material/Grid";
import Modal from "../../atoms/modal/index";
import { Typography } from "@mui/material";
import theme from "../../../theme";

interface UploadProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  userName: string;
}
export default function UploadSuccessfulModal({ userName }: UploadProps) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal isOpen={open}>
      <Box style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton data-testid="close" onClick={handleClose} disableRipple>
          <Icon src={close} />
        </IconButton>
      </Box>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "73px 92px" }}
        spacing={4}
      >
        <Grid item>
          <Icon src={success} />
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <Typography variant="h2" sx={{ marginRight: theme.spacing(2) }}>
              Hi {userName}!
            </Typography>
            <TypographyTag
              variant="h3"
              children="Your Resume got Uploaded Successfully !"
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={handleClose}
            children="Okay"
          ></Button>
        </Grid>
      </Grid>
    </Modal>
  );
}
