import React from 'react';
// --style--
//import style from "../components/app.module.css";
// --PROFILE--
import Profile from './Profile/profile';
import user from '../data/user.json';
// --STATISTIC--
import Statistics from './Statistics/statictics';
import data from '../data/data.json';
//--FRIEND LIST--
import FriendList from './FriendsList/friendlist';
import friends from '../data/friends.json';
//--TRANSACTION--
import TransactionHistory from './Transaction/transction';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
