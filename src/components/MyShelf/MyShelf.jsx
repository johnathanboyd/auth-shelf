import { object }from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

function MyShelf() {
    useEffect( () => { getItems() }, [] );

    const store = useReduxStore();
    const items = useSelector( store => {
        return store.items;
    })
    const dispatch = useDispatch();

    const getItems = (userId) => {
        console.log( 'in getItems' );
        if ( store.user.id === userId ){
            dispatch( {type: 'FETCH_SHELF', payload: userId} )
        }
    }
    return (
      <div>
        <h2>My Shelf</h2>
        <p>Here's my items.</p>
        <ul>
           { items.map( item => {return<li key={item.id}>{item.description}<img src={item.image_url}/></li>})} 
        </ul>
      </div>
    );
}

export default MyShelf;