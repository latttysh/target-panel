import './SideBar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import HistoryIcon from '@mui/icons-material/History';
import FeedIcon from '@mui/icons-material/Feed';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Logotype</span>
      </div>
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
              <PointOfSaleIcon className="icon" />
              <span>Вывести деньги</span>
            </li>
          </Link>
          <Link to="/History">
            <li>
              <HistoryIcon className="icon" />
              <span>История транзакций</span>
            </li>
          </Link>
          <p className="title">Информация</p>
          <Link to="/News">
            <li>
              <FeedIcon className="icon" />
              <span>Блог</span>
            </li>
          </Link>
          <Link to="/Support">
            <li>
              <HelpOutlineIcon className="icon" />
              <span>Поддержка</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
