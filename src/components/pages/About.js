import React from 'react';

export default (props) => {
    return (
        <div>
            <h1 className="display-4">
            About contact Manage & displaying id parameter
            </h1>

            <h1 className="display-4">
                {props.match.params.id /*this is something you bring value from urlbar*/}
            </h1>

            <p className="lead"> Simple app to manage contacts </p>

            <p className="text-secondary"> Version 1.0.0</p>
        </div>
    )
}