import React from 'react'
import './RButton.css'
import { Button } from '@material-ui/core';
function RButton({title}) {
    return (
        <div className="rButton">
            <Button className="rButton__change" variant="contained" color="primary">
              {title}
            </Button>
        </div>
    )
}

export default RButton
