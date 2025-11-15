
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "@/components/ui/sonner"


// 🧠 import Provider from react-redux
import { Provider } from "react-redux";
import store from "./redux/Store.js"; 

// 🧠 import redux-persist
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ThemeProvider from './components/ThemeProvider'

// Create persistor
const persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
         <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
   <Toaster />

  </StrictMode>
);
