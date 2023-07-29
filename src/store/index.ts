import { createStore, combineReducers, compose, Store } from 'redux';

import behavior from './reducers/behaviorReducer';
import messages from './reducers/messagesReducer';
import quickButtons from './reducers/quickButtonsReducer';
import preview from './reducers/fullscreenPreviewReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const storeMap: Map<String, Store> = new Map<String, Store>();

function createChatStore(chatId: string) : Store {
  const composeEnhancers =   (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const reducer = combineReducers({ behavior, messages, quickButtons, preview });
  const store = createStore(reducer, composeEnhancers());

  storeMap.set(chatId, store);
  
  return store;
}

function getStore(chatId: string) : Store {
  const store: Store | undefined = storeMap.get(chatId);
  
  if (store) {
    return store;
  }
  
  return createChatStore(chatId);
}

export default getStore;
