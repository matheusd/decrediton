var services = require("../ticketmatcherrpc/api-ticket-matcher_grpc_pb.js");
import {
  StatusRequest, FindMatchesRequest, GenerateTicketRequest, TxOut,
  PublishTicketRequest,
} from "../ticketmatcherrpc/api-ticket-matcher_pb.js";

import grpc from "grpc";

const getServiceClient = (clientClass) => (address, port) =>
  new Promise((resolve, reject) => {
    var creds = grpc.credentials.createInsecure();
    var client = new clientClass(address + ":" + port, creds);

    var deadline = new Date();
    var deadlineInSeconds = 30;
    deadline.setSeconds(deadline.getSeconds()+deadlineInSeconds);
    grpc.waitForClientReady(client, deadline, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(client);
      }
    });
  });

export const getSplitTicketMatcherService = getServiceClient(services.SplitTicketMatcherServiceClient);

export const getStatus = (client) => new Promise((resolve, reject) => {
  const req = new StatusRequest();
  client.status(req, (err, resp) => {
    err ? reject(err) : resolve(resp.toObject());
  });
});

export const findMatches = (client, amount) => new Promise((resolve, reject) => {
  const req = new FindMatchesRequest();
  req.setAmount(amount);
  client.findMatches(req, (err, resp) => {
    err ? reject(err) : resolve(resp.toObject());
  });
});

export const generateTicket = (client, commitAmount, commitScript, changeAmount,
  changeScript, voteAddr, sessionID) => new Promise((resolve, reject) => {

    const commitTxOut = new TxOut();
    commitTxOut.setValue(commitAmount);
    commitTxOut.setScript(commitScript);

    const changeTxOut = new TxOut();
    changeTxOut.setValue(changeAmount);
    changeTxOut.setScript(changeScript);

    const req = new GenerateTicketRequest();
    req.setSessionId(sessionID);
    req.setCommitmentOutput(commitTxOut);
    req.setChangeOutput(changeTxOut);
    req.setVoteAddress(voteAddr);

    client.generateTicket(req, (err, resp) => err ? reject(err) : resolve(resp));
  });

export const publishTicket = (client, sessionID, splitTx, splitTxOutIndex,
  ticketInputScriptSig) => new Promise((resolve, reject) => {

    const req = new PublishTicketRequest();
    req.setSessionId(sessionID);
    req.setSplitTx(splitTx);
    req.setSplitTxOutputIndex(splitTxOutIndex);
    req.setTicketInputScriptsig(ticketInputScriptSig);

    client.publishTicket(req, (err, resp) => err ? reject(err) : resolve(resp));
  });
