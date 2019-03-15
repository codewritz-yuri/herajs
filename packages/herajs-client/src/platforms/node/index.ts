import 'regenerator-runtime/runtime';

import AergoClient from '../../client';
import GrpcProvider from '../../providers/grpc';
import GrpcWebNodeProvider from '../../providers/grpc-web-node';
import constants from '../../constants';
import Contract from '../../models/contract';
import Address from '../../models/address';
import Amount from '../../models/amount';
import Tx from '../../models/tx';

AergoClient.prototype.target = 'node';

AergoClient.prototype.defaultProvider = () => {
    return new GrpcProvider(); 
};

export {
    AergoClient,
    GrpcProvider,
    GrpcWebNodeProvider,
    constants,
    Contract,
    Address,
    Amount,
    Tx,
    AergoClient as default
};
