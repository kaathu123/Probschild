import React, { useState } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const Parent = () => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <ChildOne setValue={setValue} />
            <ChildTwo value={value} />
        </div>
    );
}

export default Parent
