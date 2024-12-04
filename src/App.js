// import Home from "./Pages/Home";


// function App() {
//   return (
//     <div >
//       <Home/>
//     </div>
//   );
// }

// export default App;

import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { SONGDETAILS,HOMEPAGE } from './Utils/RouteList.js';
import Loader from './Components/Common/Loader.jsx';
import Layout from './Utils/Layout.jsx';

// Lazy load components
const HomePage = React.lazy(() => import('./Pages/Homepage.jsx'));
const SongsDetail = React.lazy(() => import('./Pages/SongDetail.jsx'));
const router = createBrowserRouter([
  {
    path: HOMEPAGE,
    element: (      
        <Layout />
    ),
    children: [
      { path: HOMEPAGE, element: <HomePage /> },
      { path: SONGDETAILS, element: <SongsDetail /> },
      
    ],
  },  

]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
