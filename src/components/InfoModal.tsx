import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import PropTypes from 'prop-types'

export const InfoModal: React.ComponentType<{open: boolean, onClose: () => void}> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      <DialogTitle id="simple-dialog-title">同人陣轉檔器</DialogTitle>
      <DialogContent>
        Made by dipsy
      </DialogContent>
    </Dialog>
  )
}

InfoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}
