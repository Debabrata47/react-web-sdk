import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Meeting from './meeting';

let payload={
  meetingNumber:' 84954849042',
  role:1,
  sdkKey:'fOM_9QF3TiG8ePNPVCmF9A',
  sdkSecret:'MaseUpFWt2oixqVUudVkXManxklNbllk',
  passWord:'598128',
  userName:'Testing',
  userEmail:'bhawna@silwalk.com',
  leaveUrl:'https://localhost:3000'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/meeting',
    element:<Meeting payload={payload}/>
  }
]);
root.render(
  <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
