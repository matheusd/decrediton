// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var api$ticket$matcher_pb = require('./api-ticket-matcher_pb.js');

function serialize_dcrticketmatcher_FindMatchesRequest(arg) {
  if (!(arg instanceof api$ticket$matcher_pb.FindMatchesRequest)) {
    throw new Error('Expected argument of type dcrticketmatcher.FindMatchesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dcrticketmatcher_FindMatchesRequest(buffer_arg) {
  return api$ticket$matcher_pb.FindMatchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dcrticketmatcher_FindMatchesResponse(arg) {
  if (!(arg instanceof api$ticket$matcher_pb.FindMatchesResponse)) {
    throw new Error('Expected argument of type dcrticketmatcher.FindMatchesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dcrticketmatcher_FindMatchesResponse(buffer_arg) {
  return api$ticket$matcher_pb.FindMatchesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dcrticketmatcher_FundSplitTxRequest(arg) {
  if (!(arg instanceof api$ticket$matcher_pb.FundSplitTxRequest)) {
    throw new Error('Expected argument of type dcrticketmatcher.FundSplitTxRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dcrticketmatcher_FundSplitTxRequest(buffer_arg) {
  return api$ticket$matcher_pb.FundSplitTxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dcrticketmatcher_FundSplitTxResponse(arg) {
  if (!(arg instanceof api$ticket$matcher_pb.FundSplitTxResponse)) {
    throw new Error('Expected argument of type dcrticketmatcher.FundSplitTxResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dcrticketmatcher_FundSplitTxResponse(buffer_arg) {
  return api$ticket$matcher_pb.FundSplitTxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dcrticketmatcher_FundTicketRequest(arg) {
  if (!(arg instanceof api$ticket$matcher_pb.FundTicketRequest)) {
    throw new Error('Expected argument of type dcrticketmatcher.FundTicketRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dcrticketmatcher_FundTicketRequest(buffer_arg) {
  return api$ticket$matcher_pb.FundTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dcrticketmatcher_FundTicketResponse(arg) {
  if (!(arg instanceof api$ticket$matcher_pb.FundTicketResponse)) {
    throw new Error('Expected argument of type dcrticketmatcher.FundTicketResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dcrticketmatcher_FundTicketResponse(buffer_arg) {
  return api$ticket$matcher_pb.FundTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dcrticketmatcher_GenerateTicketRequest(arg) {
  if (!(arg instanceof api$ticket$matcher_pb.GenerateTicketRequest)) {
    throw new Error('Expected argument of type dcrticketmatcher.GenerateTicketRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dcrticketmatcher_GenerateTicketRequest(buffer_arg) {
  return api$ticket$matcher_pb.GenerateTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dcrticketmatcher_GenerateTicketResponse(arg) {
  if (!(arg instanceof api$ticket$matcher_pb.GenerateTicketResponse)) {
    throw new Error('Expected argument of type dcrticketmatcher.GenerateTicketResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dcrticketmatcher_GenerateTicketResponse(buffer_arg) {
  return api$ticket$matcher_pb.GenerateTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dcrticketmatcher_StatusRequest(arg) {
  if (!(arg instanceof api$ticket$matcher_pb.StatusRequest)) {
    throw new Error('Expected argument of type dcrticketmatcher.StatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dcrticketmatcher_StatusRequest(buffer_arg) {
  return api$ticket$matcher_pb.StatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dcrticketmatcher_StatusResponse(arg) {
  if (!(arg instanceof api$ticket$matcher_pb.StatusResponse)) {
    throw new Error('Expected argument of type dcrticketmatcher.StatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dcrticketmatcher_StatusResponse(buffer_arg) {
  return api$ticket$matcher_pb.StatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SplitTicketMatcherServiceService = exports.SplitTicketMatcherServiceService = {
  findMatches: {
    path: '/dcrticketmatcher.SplitTicketMatcherService/FindMatches',
    requestStream: false,
    responseStream: false,
    requestType: api$ticket$matcher_pb.FindMatchesRequest,
    responseType: api$ticket$matcher_pb.FindMatchesResponse,
    requestSerialize: serialize_dcrticketmatcher_FindMatchesRequest,
    requestDeserialize: deserialize_dcrticketmatcher_FindMatchesRequest,
    responseSerialize: serialize_dcrticketmatcher_FindMatchesResponse,
    responseDeserialize: deserialize_dcrticketmatcher_FindMatchesResponse,
  },
  generateTicket: {
    path: '/dcrticketmatcher.SplitTicketMatcherService/GenerateTicket',
    requestStream: false,
    responseStream: false,
    requestType: api$ticket$matcher_pb.GenerateTicketRequest,
    responseType: api$ticket$matcher_pb.GenerateTicketResponse,
    requestSerialize: serialize_dcrticketmatcher_GenerateTicketRequest,
    requestDeserialize: deserialize_dcrticketmatcher_GenerateTicketRequest,
    responseSerialize: serialize_dcrticketmatcher_GenerateTicketResponse,
    responseDeserialize: deserialize_dcrticketmatcher_GenerateTicketResponse,
  },
  fundTicket: {
    path: '/dcrticketmatcher.SplitTicketMatcherService/FundTicket',
    requestStream: false,
    responseStream: false,
    requestType: api$ticket$matcher_pb.FundTicketRequest,
    responseType: api$ticket$matcher_pb.FundTicketResponse,
    requestSerialize: serialize_dcrticketmatcher_FundTicketRequest,
    requestDeserialize: deserialize_dcrticketmatcher_FundTicketRequest,
    responseSerialize: serialize_dcrticketmatcher_FundTicketResponse,
    responseDeserialize: deserialize_dcrticketmatcher_FundTicketResponse,
  },
  fundSplitTx: {
    path: '/dcrticketmatcher.SplitTicketMatcherService/FundSplitTx',
    requestStream: false,
    responseStream: false,
    requestType: api$ticket$matcher_pb.FundSplitTxRequest,
    responseType: api$ticket$matcher_pb.FundSplitTxResponse,
    requestSerialize: serialize_dcrticketmatcher_FundSplitTxRequest,
    requestDeserialize: deserialize_dcrticketmatcher_FundSplitTxRequest,
    responseSerialize: serialize_dcrticketmatcher_FundSplitTxResponse,
    responseDeserialize: deserialize_dcrticketmatcher_FundSplitTxResponse,
  },
  status: {
    path: '/dcrticketmatcher.SplitTicketMatcherService/Status',
    requestStream: false,
    responseStream: false,
    requestType: api$ticket$matcher_pb.StatusRequest,
    responseType: api$ticket$matcher_pb.StatusResponse,
    requestSerialize: serialize_dcrticketmatcher_StatusRequest,
    requestDeserialize: deserialize_dcrticketmatcher_StatusRequest,
    responseSerialize: serialize_dcrticketmatcher_StatusResponse,
    responseDeserialize: deserialize_dcrticketmatcher_StatusResponse,
  },
};

exports.SplitTicketMatcherServiceClient = grpc.makeGenericClientConstructor(SplitTicketMatcherServiceService);
