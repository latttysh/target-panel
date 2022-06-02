import React from 'react';
import NavBar from '../../components/NavBar';
import SubHeader from '../../components/SubHeader';
import TextField from '@mui/material/TextField';
import Message from '../../components/Message';
import './Support.scss';

const Support = () => {
  return (
    <div className="support">
      <NavBar />
      <SubHeader />
      <div className="support-block">
        <div className="support-block-chat">
          <div className="support-block-chat-window">
            <Message
              isMine={true}
              text={'Здравствуйте, у меня проблема, не открывается сайт с телефона'}
            />
            <Message
              isMine={false}
              text={'Добрый день! Попробуйте почистить кеш и перезапустить браузер.'}
            />
          </div>
          <TextField
            id="outlined-multiline-static"
            label="Ваш вопрос?"
            multiline
            fullWidth
            rows={6}
            defaultValue=""
          />
          <button>Отправить</button>
        </div>
        <div className="support-block-manager">MANAGER</div>
      </div>
    </div>
  );
};

export default Support;
