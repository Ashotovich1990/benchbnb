import React from 'react';

const BenchIndexItem = props => {
    const bench = Object.values(props.bench)[0]
    return (
        <div>
            <p>{bench.description}</p>
        </div>
    )
}

export default BenchIndexItem;