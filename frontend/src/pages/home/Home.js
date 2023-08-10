/*import React from 'react'

export const Home = () => {
  return (
    <div>
        <Header/>
    </div>
  );
}
*/

import React from "react";
import Navbar from "../../components/Navbar";

export const Home = () =>{
    return(
        <React.Fragment>
            <Navbar/>
        </React.Fragment>
    );
}

export default Home