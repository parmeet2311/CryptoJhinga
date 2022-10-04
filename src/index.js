import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
  <React.StrictMode>

    <MoralisProvider serverUrl="https://x89zzqevy89s.usemoralis.com:2053/server" appId="SWoubAno8vHBJ10SqJLOK4PqaSajbbMSEt64TG8Z">
      <Provider store={store}>
        <App />
      </Provider>
    </MoralisProvider>

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
