import React from 'react';
import PropTypes from 'prop-types';
import style from './friendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <div className={style.wrapper}>
      <span
        className={style.isOnline}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </div>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
