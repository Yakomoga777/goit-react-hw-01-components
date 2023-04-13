import styled from 'styled-components';

export const Friend = styled.li`
  width: 300px;
  /* height: 150px; */
  display: flex;
  padding: 10px;
  justify-content: center;
  border: 2px solid black;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;
export const FriendCard = styled.div`
  display: flex;
  gap: 15px;
`;
export const FriendImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;
export const FriendName = styled.p`
  margin-top: auto;
  margin-bottom: auto;
  font-size: 20px;
`;

export const IconPlace = styled.span`
  /* color: green; */
  margin-top: auto;
  margin-bottom: auto;

  svg {
    color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  }
`;

// export const TiMediaRecord = styled.svg`

//   margin-top: auto;
//   margin-bottom: auto;
// `;
