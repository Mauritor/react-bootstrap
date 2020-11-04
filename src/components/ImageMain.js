import React, { Fragment, useEffect } from 'react';
import Typed from 'typed.js';

const ImageMain = () => {
    useEffect(() => {
        const options = {
            strings: ['World!', 'I said Hello again'],
            typeSpeed: 50,
            backSpeed: 80,
            backDelay: 3000,
            startDelay: 1000,
            loop: true,
            showCursor: true
        }
        const typed = new Typed('#demo', options)
        return () => {
            typed.destroy();
        }
    }, [])
    return (
        <Fragment>
            <div className="content-main">
                <h1 className="content-main-text">Hello <span id="demo"></span></h1>
            </div>
        </Fragment>
    )
}
export default ImageMain