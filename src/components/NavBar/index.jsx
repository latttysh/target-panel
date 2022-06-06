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
          <AccountBalanceWalletIcon
            fontSize="medium"
            style={{
              float: 'left',
              color: 'white',
              marginRight: '10px',
              width: '30px',
              height: '30px',
            }}
          />
          <>
            <p>На счёте</p>
            <div className="count">0 Р</div>
          </>
        </div>
        <div className="freeze">
          <AcUnitIcon
            style={{
              float: 'left',
              color: 'white',
              marginRight: '10px',
              width: '30px',
              height: '30px',
            }}
          />
          <>
            <p>Заморожено</p>
            <div className="count">0 Р</div>
          </>
        </div>
      </div>
      <div className="right">
        <div className="time">
          <p>Рады вас видеть, UserName</p>
          <p>Последний визит: %data</p>
        </div>
        <Avatar sx={{ bgcolor: 'red' }}>OP</Avatar>
        <div className="logout">
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
