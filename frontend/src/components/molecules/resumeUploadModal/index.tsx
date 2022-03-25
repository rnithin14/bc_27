import * as React from "react";
import { Box } from "@mui/system";
import Icon from "../../atoms/icon/index";
import close from "../../../assets/icons/close.svg";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Modal from "../../atoms/modal/index";

import Upload from "../../atoms/upload/index";
import { Typography } from "@mui/material";
interface UploadProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onChange?: any;
}
export default function ResumeUploadModal({ onClick, onChange }: UploadProps) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  return (
    <Modal isOpen={open}>
      <Box style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton data-testid="close" onClick={handleClose} disableRipple>
          <Icon src={close} />
        </IconButton>
      </Box>
      <Typography variant="h2">Upload Resume</Typography>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ paddingTop: "10px" }}
      >
        <Upload
          children="Click Here to Upload File"
          onChange={onChange}
          onClick={onClick}
        />
      </Grid>
    </Modal>
  );
}
