import React from 'react';

export default function RewardCard(props){
  return(
    <div className='card-conainter'>
      {props.name}
      {props.points}
    </div>
  )
}

RewardCard.defaultProps = {
  text: ''
};

// [
//   {
//       "purchased": false,
//       "parentId": "5b4e03983849bc2e4b21588c",
//       "name": "test2",
//       "points": 50,
//       "id": "5b4e2e3e31b45837b4e21261"
//   }
// ]