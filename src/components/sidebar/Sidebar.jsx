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
              <li className="sidebarListItem">
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
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Total Listed Products
              </li>
            </Link>
            <Link to="/Transactions" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            <Link to="/vendorRequest" className="link">
              <li className="sidebarListItem">
                <AddCircleOutlineSharpIcon className="sidebarIcon" />
                Accept request from vendors
              </li>
            </Link>
            <Link to="totalServices" className="link">
              <li className="sidebarListItem">
                <DesignServicesSharpIcon className="sidebarIcon" />
                Total Services
              </li>
            </Link>
            <Link to="Testimonials" className="link">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Testimonials
              </li>
            </Link>
            <Link to="Gallery" className="link">
              <li className="sidebarListItem">
                <PermMediaSharpIcon className="sidebarIcon" />
                Gallery
              </li>
            </Link>
            <Link to="complaint" className="link">
              <li className="sidebarListItem">
                <Badge badgeContent={10} color="secondary" >
                  <MailIcon className="sidebarIcon" />
                </Badge>
                Complaints
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Profiles</h3>
          <ul className="sidebarList">
            <Link to="ManageProfile">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage
              </li>
            </Link>
            <Link to='setting' className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Settings
              </li>
            </Link>
          </ul>
        </div>
        <Button variant="outlined" color="error">
          log out
        </Button>
      </div>
    </div>
  );
}
