import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import AppRoutes from './routes';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppRoutes/>
            </PersistGate>
        </Provider>
    );
}

export default App;
