import React from 'react';
import user from '../user.json';
// import Description from './Profile/Description/Description';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

import items from '../data.json';
import friendsItems from '../friends.json';
import { GlobalStyle } from './GlobalStyles';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={items} />
      <Statistics stats={items} />
      <FriendList friends={friendsItems} />
      <TransactionHistory
        items={transactions}
        // id={transactions.id}
        // type={transactions.type}
        // amount={transactions.amount}
        // currency={transactions.currency}
      />
    </>
  );
};

// export const App = () => {
//   return (
//     <>
//       <Profile />
//       <Statistics />
//     </>
//   );
// };
