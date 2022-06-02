import './SideBar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Главное меню</p>
          <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>Главный экран</span>
            </li>
          </Link>
          <p className="title">Финансы</p>
          <Link to="/Withdraw">
            <li>
              <GroupIcon className="icon" />
              <span>Вывести деньги</span>
            </li>
          </Link>
          <Link to="/History">
            <li>
              <Inventory2Icon className="icon" />
              <span>История транзакций</span>
            </li>
          </Link>
          <p className="title">Информация</p>
          <Link to="/News">
            <li>
              <QueryStatsIcon className="icon" />
              <span>Блог</span>
            </li>
          </Link>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <Link to="/Support">
            <li>
              <HealthAndSafetyIcon className="icon" />
              <span>Поддержка</span>
            </li>
          </Link>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">ACCOUNT</p>
          <li>
            <PersonIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default SideBar;
