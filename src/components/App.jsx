import React from 'react';
import user from '../user.json';
// import Description from './Profile/Description/Description';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

import items from '../data.json';
import friendsItems from '../friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={items} />
      <FriendList friends={friendsItems} />
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
