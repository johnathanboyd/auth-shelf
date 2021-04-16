import axios from 'axios';
import { put, takeLatest} from 'redux-saga/efffects';

// 
function* fetchShelf() {
    try {
        const response = yield axios.get('/shelf');
        yield put({ type: 'SET_SHELF', payload: response.data })
    } catch (error) {
        console.log('User get request failed', error);
    }
}


function* itemSaga() {
    yield takeLatest( 'FETCH_SHELF', fetchShelf);
}
export default itemSaga