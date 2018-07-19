import React from 'react';

export default function TaskEditForm(props) {
    return (
        <form onSubmit={(e) => props.onSubmit(e)}>
            <label htmlFor="name"><h3>Item:</h3></label>
            <input
                type="name"
                id="name"
                name="name"
                placeholder={props.name}
                onChange={ (e) =>props.onChangeItem(e.target.value)}
           />
            <label htmlFor="points"><h3>Points:</h3></label>
            <input
                type="points"
                id="points"
                name="points"
                placeholder={props.points}
                onChange={ (e) =>props.onChangePoints(e.target.value)}
            />
            <div>
            <button
              type='submit'>
              Save
            </button>
            </div>
        </form>
    );
}
