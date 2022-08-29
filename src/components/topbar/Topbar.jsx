import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Button variant="outlined" size="medium">
              Log In
            </Button>
          </div>
          <PersonIcon className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
