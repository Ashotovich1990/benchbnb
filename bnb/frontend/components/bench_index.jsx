import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
      const benches = this.props.benches.map((bench,idx) => <BenchIndexItem key={idx} bench={bench}/>)
      return (
          <div>
              <ul>
                {benches}
              </ul>
          </div>
      )
    }
}

export default BenchIndex;