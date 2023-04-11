import user from '../user.json';
import Description from './Profile/Description/Description';
import Profile from './Profile/Profile';

// export const App = () => {
//   return (
//     <Profile
//       username={user.username}
//       tag={user.tag}
//       location={user.location}
//       avatar={user.avatar}
//       stats={user.stats}
//     />
//   );
// };

export const App = () => {
  return (
    <div>
      <Profile> key={user.username}</Profile>
    </div>
  );
};
