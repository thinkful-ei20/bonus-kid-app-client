import React from 'react';
import {connect} from 'react-redux';
import { deleteRewards } from '../actions/rewards';
import { editRewards } from '../actions/rewards';
import RewardEditForm from './RewardEditForm';


export class RewardCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      name: this.props.name,
      points:this.props.points,
    }
  }
  //Edit Button
  handleEditButton = () => {
    console.log('button clicked')
    this.setState({showEdit:!this.state.showEdit});
  }

  updateItemState = (value) => {
    this.setState({name:value});
    console.log('value input to Item', value);
    
  }

  updatePointsState = (value) => {
    this.setState({points: value});
    console.log('value input to Item', value);
    
  }

  handleSaveButton = (event) =>{
  console.log('submit ran');
   event.preventDefault()
    let reward = {
      name: this.state.name,
      points: this.state.points
    }
    this.setState({showEdit:!this.state.showEdit});
   return this.props.
    dispatch(editRewards(this.props.id, reward))
   
  }


  //Delete button
  
  render(){
    console.log(this.state.showEdit);
    console.log(this.props.id);
    if(this.state.showEdit === true){
      return (
        //<h1>Form here</h1>
        <RewardEditForm 
        onChangeItem={(value) =>this.updateItemState(value)} 
        onChangePoints={(value) =>this.updatePointsState(value)} 
        onSubmit={(e) => this.handleSaveButton(e)}
        item_id={this.props.id} 
        name={this.props.name}
        points={this.props.points} />
      );
    }

    return (
      <div className='card-conainter' id={this.props.id}>
        <div className='card-name'>
          <h3> Item: {this.state.name} </h3>
        </div>

        <div className='card-points'>
          <h3> Points: {this.state.points} </h3>
        </div>

        <button 
          className='delete-button' 
          id='delete'
          onClick={() => this.props.
            dispatch(deleteRewards(this.props.item_id))}>
          Delete
        </button>

        <button 
          className='edit-button' 
          id='edit'
          onClick={() => this.handleEditButton()}>
          Edit
        </button>
      </div>
      )
  }
}




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