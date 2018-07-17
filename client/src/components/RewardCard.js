import React from 'react';
import {connect} from 'react-redux';
import { deleteRewards } from '../actions/rewards';
import { fetchRewards } from '../actions/rewards';


export class RewardCard extends React.Component{
  //Edit Button

  //Delete button
  
  render(){
    console.log(this.props.name);
    const _id = this.props.item_id;
    console.log(this.props.item_id);
    return (
      <div className='card-conainter' id={this.props.id}>
        <div className='card-name'>
          <h3> Item: {this.props.name} </h3>
        </div>

        <div className='card-points'>
          <h3> Points: {this.props.points} </h3>
        </div>

        <button 
          className='delete-button' 
          id='delete'
          onClick={() => this.props.
            dispatch(deleteRewards(this.props.item_id))}>

          Delete
        </button>
      </div>
      )
  }
}

//onClick={()=>this.props.dispatch(deleteRewardsError())} for delete button use later



RewardCard.defaultProps = {
  name: '',
  points: '',
};

export default connect()(RewardCard);

// [
//   {
//       "purchased": false,
//       "parentId": "5b4e03983849bc2e4b21588c",
//       "name": "test2",
//       "points": 50,
//       "id": "5b4e2e3e31b45837b4e21261"
//   }
// ]