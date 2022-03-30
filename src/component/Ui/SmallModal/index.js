import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './smallModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({
  isSmallModalOpen,
  onOpenSmallModal,
  onCloseSmallModal,
}) {
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={isSmallModalOpen}
        onClose={onCloseSmallModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isSmallModalOpen}>
          <Box sx={style}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              Connect to wallet
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
