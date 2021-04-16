import { object } from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';


function ShelfPage() {
  useEffect( () => { getItems() }, [] );

  const store = useReduxStore();

  const items = useSelector( store => {
    return store.items;
  })

  const [ objectToSend, setObjectToSend] = useState({});

  const dispatch = useDispatch();

  const addItem = () => {
    console.log( 'in addItem' );
    if( objectToSend.description && objectToSend.image_url ) {
      dispatch( { type: 'ADD_ITEM', payload: objectToSend } );
    } else {
      alert( 'You may not leave a field empty!');
    }
  }

  const deleteItem = (userId, itemId) => {
    console.log( 'in deleteItem' );
    if ( store.user.id === userId ) {
      dispatch( { type: 'DELETE_ITEM', payload: itemId})
    }
    
  }

  const getItems = () => {
    console.log( 'in getItems' );
    dispatch( { type: 'FETCH_SHELF' } );
  }
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>Add an Item to the Shelf</p>
      <label>Description</label>
      <input onChange = {event => {setObjectToSend({ ...objectToSend, description: event.target.value})}} type="text"></input>
      <label>Image Url</label>
      <input onChange = {event => {setObjectToSend({ ...objectToSend, image_url: event.target.value})}}type="text"></input>
      <button onClick = {() => addItem()}>Add</button>
      <p>All of the available items can be seen here.</p>
      {JSON.stringify(items)}
    </div>
  );
}

export default ShelfPage;
