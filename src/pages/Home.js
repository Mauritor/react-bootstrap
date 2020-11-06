import React, { Fragment } from 'react';
import NavBar from '../components/NavBar'
import ImageMain from '../components/ImageMain'
import SectionLazy from '../components/SectionLazy';

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

