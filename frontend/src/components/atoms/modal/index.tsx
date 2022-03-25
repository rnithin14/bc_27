import * as React from "react";
import { Box } from "@mui/system";
import { StyledModal, Backdrop, style } from "./styles";

interface Modalprops {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose?: any;
}

const Modal: React.FC<Modalprops> = ({ children, isOpen, onClose }) => {
  return (
    <div>
      <StyledModal
        data-testid="modal"
        open={isOpen}
        onClose={onClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>{children}</Box>
      </StyledModal>
    </div>
  );
};

export default Modal;
