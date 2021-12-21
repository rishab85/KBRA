import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer';

export let storeInstance;
export default function configureAppStore(preloadedState={}) {
  const store = configureStore({
    reducer: rootReducer
  })

  storeInstance = store;
  window.store=store;
  return store
}