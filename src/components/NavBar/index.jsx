import React from 'react';
import './NavBar.scss';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="onWallet">
          <AccountBalanceWalletIcon style={{ float: 'left' }} />
          <p>На счёте</p>
          <div className="count">0</div>
        </div>
        <div className="freeze">
          <AcUnitIcon style={{ float: 'left' }} />
          <p>Заморожено</p>
          <div className="count">0</div>
        </div>
      </div>
      <div className="right">
        <div className="time">
          <p>Рады вас видеть, UserName</p>
          <p>Последний визит: %data</p>
        </div>
        <Avatar sx={{ bgcolor: 'red' }}>OP</Avatar>
        <div className="">
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
