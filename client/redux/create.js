import {createStore, applyMiddleware, compose} from 'redux';
import clientMiddleware from './config/clientMiddleware';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';
import Api from './config/Api';

export default function finalCreateStore() {
 
    const reduxRouterMiddleware = routerMiddleware(history);

    const middleware = [clientMiddleware(Api), reduxRouterMiddleware, thunk];

 
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middleware))
    );

    if (module.hot) {
        module.hot.accept('./reducers/reducer', () => {
            store.replaceReducer(require('./reducers/reducer'));
        });
    }

    return store;
}