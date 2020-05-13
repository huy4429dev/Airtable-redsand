import React from 'react';
import  Button  from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GoogleDrive from './GoogleDrive'

export default function Attachment() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Attachment
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Computer</MenuItem>
  <MenuItem onClick={handleClose}>{GoogleDrive}</MenuItem>
        <MenuItem onClick={handleClose}>DropBox</MenuItem>
        <MenuItem onClick={handleClose}>OneDrive</MenuItem>
        <MenuItem>
          <p> Attach a link</p>
         
          
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
         
          </MenuItem>
        
      </Menu>
    </div>
  );
}