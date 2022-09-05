import "./sidebar.css";
import {
  LineStyle,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  MailOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import PermMediaSharpIcon from '@mui/icons-material/PermMediaSharp';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function vendorSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Vendor Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/vendor" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Vendor Dashboard
              </li>
            </Link>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Vendor History
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/vendorusers" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Vendor Users
              </li>
            </Link>
            <Link to="/vendorproducts" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Vendor Total Listed Products
              </li>
            </Link>
            <Link to="/vendorTransactions" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Vendor Transactions
              </li>
            </Link>
            <Link to="/vendorRequest" className="link">
              <li className="sidebarListItem">
                <AddCircleOutlineSharpIcon className="sidebarIcon" />
                Vendor Accept request from vendors
              </li>
            </Link>
            <Link to="vendortotalServices" className="link">
              <li className="sidebarListItem">
                <DesignServicesSharpIcon className="sidebarIcon" />
                Vendor Total Services
              </li>
            </Link>
            <Link to="vendorTestimonials" className="link">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Vendor Testimonials
              </li>
            </Link>
            <Link to="vendorGallery" className="link">
              <li className="sidebarListItem">
                <PermMediaSharpIcon className="sidebarIcon" />
                Vendor Gallery
              </li>
            </Link>
            <Link to="vendorcomplaint" className="link">
              <li className="sidebarListItem">
                <Badge badgeContent={10} color="secondary" >
                  <MailIcon className="sidebarIcon" />
                </Badge>
                Vendor Complaints
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Vendor Profiles</h3>
          <ul className="sidebarList">
            <Link to="vendorManageProfile">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Vendor Manage
              </li>
            </Link>
            <Link to='vendorsetting' className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Vendor Settings
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
