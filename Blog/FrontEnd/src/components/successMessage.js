import React from 'react';


const SuccessMessage = (msg) => {

    return(
        <span className="alert alert-success" role="alert">
            {msg.msg}
            {console.log(msg.msg)}
        </span>
    )
}


export default SuccessMessage;


