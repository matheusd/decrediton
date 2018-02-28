var services = require("../ticketmatcherrpc/api-ticket-matcher_grpc_pb.js");
import {
  StatusRequest, FindMatchesRequest, GenerateTicketRequest, TxOut,
  OutPoint, FundTicketRequest, FundSplitTxRequest,
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
  changeScript, voteAddr, sessionID, splitValue, splitScript, splitChangeValue,
  splitChangeScript, splitInputs) => new Promise((resolve, reject) => {

  const commitTxOut = new TxOut();
  commitTxOut.setValue(commitAmount);
  commitTxOut.setScript(commitScript);

  const changeTxOut = new TxOut();
  changeTxOut.setValue(changeAmount);
  changeTxOut.setScript(changeScript);

  const splitTxOut = new TxOut();
  splitTxOut.setValue(splitValue);
  splitTxOut.setScript(splitScript);

  const splitChangeTxOut = new TxOut();
  splitChangeTxOut.setValue(splitChangeValue);
  splitChangeTxOut.setScript(splitChangeScript);

  const req = new GenerateTicketRequest();
  req.setSessionId(sessionID);
  req.setCommitmentOutput(commitTxOut);
  req.setChangeOutput(changeTxOut);
  req.setVoteAddress(voteAddr);
  req.setSplitTxOutput(splitTxOut);
  req.setSplitTxChange(splitChangeTxOut);
  splitInputs.forEach(v => {
    const input = new OutPoint();
    input.setPrevHash(v.prevHash);
    input.setPrevIndex(v.prevIndex);
    req.getSplitTxInputsList().push(input);
  });
  console.log("xxx req to send", req.toObject());

  client.generateTicket(req, (err, resp) => err ? reject(err) : resolve(resp));
});

export const fundTicket = (client, sessionID, inputScriptSig) => new Promise((resolve, reject) => {
  const req = new FundTicketRequest();
  req.setTicketInputScriptsig(inputScriptSig);
  req.setSessionId(sessionID);
  client.fundTicket(req, (err, resp) => err ? reject(err) : resolve(resp));
});

export const fundSplitTransaction = (client, sessionID, inputScriptSigs) => new Promise((resolve, reject) => {
  const req = new FundSplitTxRequest();
  inputScriptSigs.forEach(v => {
    req.getSplitTxScriptsigsList().push(v);
  });
  req.setSessionId(sessionID);
  console.log(req);
  client.fundSplitTx(req, (err, resp) => err ? reject(err) : resolve(resp));
});
