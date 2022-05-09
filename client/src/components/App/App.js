import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';

const App = ({token}) => {
    if  (!token) {
       return <Navigate to="/login"/>
    }
    return(
        <Navigate to="/game"/>
    );
}
export default App;