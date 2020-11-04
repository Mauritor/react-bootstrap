import React, { Fragment } from 'react';
import NavBar from './NavBar'
import ImageMain from './ImageMain'
import SectionLazy from './SectionLazy';

const Home = () => {
    return (
        <Fragment>
            <NavBar statusHome={'fondoActivo'} />
            <ImageMain />
            <SectionLazy />
        </Fragment>

    )
}
export default Home;

