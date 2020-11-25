import React, { Fragment, useState } from 'react'
import { Button } from "react-bootstrap";

/*let botones = [];
for (let index = 0; index < 100; index++) {
    botones.push(index);
}*/

const Carton = () => {
    //const [status, setStatus] = useState('outline-success');
    
    const [botones, setBotones] = useState([
        {name: 1, id: 1, status: 'outline-success' },
        {name: 2, id: 2, status: 'outline-success'},
        {name: 3, id: 3, status: 'outline-success'}
    ])
    return (
        <Fragment>
            {botones.map((btn) => (
                <Button
                    key={btn.id}
                    variant={btn.status}
                    className="btns"
                    onClick={() => console.log('click ', btn.name) }
                >
                    {btn.name}
                </Button>
            ))
            }
        </Fragment>
    )
}

export default Carton