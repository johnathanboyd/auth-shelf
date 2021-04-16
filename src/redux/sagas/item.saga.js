import axios from 'axios';
import { put, takeLatest} from 'redux-saga/efffects';

// 
function* fetchInventory() {
    try {
        const response = yield axios.get('/shelf');
        yield put({ type: 'SET_INVENTORY', payload: response.data })
    } catch (error) {
        console.log('User get request failed', error);
    }
}


function* itemSaga() {
    yield takeLatest( 'FETCH_INVENTORY', fetchInventory);
}
export default itemSaga