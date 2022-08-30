import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  FormGroup, Form, Input, Label
} from 'reactstrap';

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

export default function Topbar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Button variant="outlined" onClick={handleOpen} size="medium">
              Log In
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography> */}
                <Form>
                  <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" id="username" name="username"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password"
                    />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="remember"
                      />
                      Remember me
                    </Label>
                  </FormGroup>
                  <Button type="submit" value="submit" color="primary">Submit</Button>
                </Form>
              </Box>
            </Modal>
          </div>
          <PersonIcon className="topAvatar" />
        </div>
      </div>

    </div>
  );
}
