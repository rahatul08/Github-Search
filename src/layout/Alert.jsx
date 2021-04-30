import React from 'react';

const MyComponent = ({alert}) => {
    return (
    alert !== null && (
        <div className={`alert alert-${alert.typr}`}>
            <i className="fas fa-info-circle">{alert.msg}</i>
        </div>
    )
    );
};


export default MyComponent;
