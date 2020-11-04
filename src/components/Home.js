import React, { Fragment } from 'react';
import NavBar from './NavBar'
import ImageMain from './ImageMain'

const Home = () => {
    return (
        <Fragment>
            <NavBar statusHome={'fondoActivo'} />
            <ImageMain />
        </Fragment>

    )
}
export default Home;

