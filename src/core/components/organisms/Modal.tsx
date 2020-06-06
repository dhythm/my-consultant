import { useStyles } from '@core/lib/styles';
import { Backdrop, Fade, Modal as MuiModal } from '@material-ui/core';
import React from 'react';

interface Props {
  open: boolean;
  onClose: (event, reason?) => void;
}

const Modal: React.FunctionComponent<Props> = ({ open, onClose, children }) => {
  const classes = useStyles();

  return (
    <MuiModal
      open={open}
      className={classes.modal}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Fade in={open}>
        <div className={classes.paper}>{children}</div>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
