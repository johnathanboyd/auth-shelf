import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action) {
    console.log( action.payload )
    try {
        yield axios.delete( '/api/shelf/' + action.payload)
            .then( response => {
                console.log( `back from DELETE /api/shelf/${action.payload}`, response.data);
            }).catch( err => {
                console.log( 'error', err);
            })
    }
    catch(error) {
        console.log( 'caught error', error)
    }
}

function* deleteItemSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem);
}

export default deleteItemSaga;