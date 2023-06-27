import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import style from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendlist}>
      {friends.map(friend => (
        <li className={style.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
