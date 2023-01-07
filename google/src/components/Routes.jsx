import React from 'react'
import {Routes as Rt} from 'react-router-dom'
import {Route,redirect } from 'react-router-dom'
import Results from './Results'
const Routes = () => {
  return (
    <div className="p-4">
      <Rt>
        <Route path="/" >
          redirect('/search')
        </Route>

        <Route path="/search" element={<Results />}></Route>
        <Route path="/images" element={<Results />}></Route>
        <Route path="/news"   element={<Results />}></Route>
        <Route path="/videos" element={<Results />}></Route>
      </Rt>
    </div>
  );
}

export default Routes
