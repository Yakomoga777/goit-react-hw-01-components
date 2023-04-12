import React from 'react';
import user from '../user.json';
// import Description from './Profile/Description/Description';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import items from '../data.json';

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
