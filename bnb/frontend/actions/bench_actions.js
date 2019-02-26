import * as BenchApiUtil from '../util/bench_api_util';

export const RECEIVE_ALL_BENCHES = "RECEIVE_ALL_BENCHES";

const receiveBenches = benches => (
   {
   type: RECEIVE_ALL_BENCHES,
   benches,
   }
);

export const fetchBenches = () => dispatch => (
    BenchApiUtil.fetchBenches()
    .then(res => dispatch(receiveBenches(res)))
);

