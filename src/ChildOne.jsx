import React from 'react';

const ChildOne = ({ setValue }) => {
    const submit = () => {
        setValue((previous) => previous + 1);
    };

    return (
        <div>
            <button onClick={submit}>Increment</button>
        </div>
    );
}

export default ChildOne;
