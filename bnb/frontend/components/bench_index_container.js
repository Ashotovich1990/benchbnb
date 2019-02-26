import {connect} from 'react-redux';
import {fetchBenches} from '../actions/bench_actions'
import BenchIndex from './bench_index';

const mSP = state => ({
    benches: Object.values(state.entities.benches),
});

const mDP = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches()),
});

export default connect(mSP, mDP)(BenchIndex);