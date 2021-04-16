import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addItem(action) {
    try {
        yield axios.post( '/api/shelf', action.payload )
            .then( response => {
                console.log( 'back from POST /api/shelf', response.data);
            }).catch( err => {
                console.log( 'error', err);
            })
    }
    catch(error) {
        console.log( 'caught error', error)
    }
}

function* addItemSaga() {
    yield takeLatest('ADD_ITEM', addItem);
}

export default addItemSaga;