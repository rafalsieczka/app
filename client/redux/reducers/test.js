const LOAD_DATA = 'test/fetch';
const LOAD_SUCCESS= 'test/fetch/success';
const LOAD_FAILED = 'test/fetch/failure';

const initState = {
    loading: false,
    error: null,
    loaded: false
};

export default function reducer(state = initState, action = {}) {
    console.log('test.js');
    console.log(action);
    switch(action.type){
        
        case LOAD_DATA:
            return {
                ...state, loading: true, error: null, loaded: false 
            };
        case LOAD_SUCCESS:
        console.log('tak')
            return {
                ...state, loading: false, test: action.result, loaded: true 
            };
        case LOAD_FAILED:
            return {
                ...state, loading: false, error: action.error.message
            };
        default:
        console.log('nie')
        console.log(action.type);
            return state;
    }
}

export function loadTest() {
    return{
        types: [LOAD_DATA,LOAD_SUCCESS,LOAD_FAILED],
        promise: (client) => client('./test')
    };
}

export function saveTest(data) {
    return{
        type: LOAD_SUCCESS,
        result: data.data+1
    };
}