import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import UploadIcon from '@mui/icons-material/Upload';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import PermMediaSharpIcon from '@mui/icons-material/PermMediaSharp';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import notificationsLabel from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              History
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            {/* <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link> */}
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Total Listed Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <UploadIcon className="sidebarIcon" />
              Upload Services
            </li>
            <li className="sidebarListItem">
              <AddCircleOutlineSharpIcon className="sidebarIcon" />
              Accept request from vendors
            </li>
            <li className="sidebarListItem">
              <DesignServicesSharpIcon className="sidebarIcon" />
              Total Services
            </li>
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Testimonials
            </li>
            <li className="sidebarListItem">
              <PermMediaSharpIcon className="sidebarIcon" />
              Gallery
            </li>
            <li className="sidebarListItem">
              <Badge badgeContent={10} color="secondary" >
                <MailIcon className="sidebarIcon" />
              </Badge>
              Complaints
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Profiles</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Settings
            </li>
          </ul>
        </div>
        <Button variant="outlined" color="error">
          log out
        </Button>
      </div>
    </div>
  );
}
