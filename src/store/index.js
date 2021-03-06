import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
    key: 'root',
    storage: localStorage
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const persistor = persistStore(store)

export {
    store,
    persistor
  }

