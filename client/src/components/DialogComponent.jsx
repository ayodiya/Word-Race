import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

const DialogComponent =  ({
  title,
  content,
  actionButtons,
  open,
  close
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'backgroundColor.light',
            borderRadius: '10px',
            padding: '20px'
          }
        }}
      >
        <DialogTitle
          id='alert-dialog-title'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '30px'
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent
          sx={{ display: 'flex', justifyContent: 'center', color: 'white' }}
        >
          {content}
        </DialogContent>
        <DialogActions
          sx={{ display: 'flex', justifyContent: 'center', color: 'white' }}
        >
          {actionButtons}
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogComponent