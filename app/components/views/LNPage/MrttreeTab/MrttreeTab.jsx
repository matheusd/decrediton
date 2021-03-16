import { KeyBlueButton } from "buttons";
import { TextInput } from "inputs";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as sel from "selectors";
import * as lna from "actions/LNActions";
import fs from "fs";

import { spawn } from "child_process";
import { getWalletPath } from "../../../../main_dev/paths";

function doMrttreeClient(walletName, extraArgs) {
  const walletPath = getWalletPath("simnet", walletName);
  return new Promise((resolve, reject) => {
    const args = [
      "--sampledir="+walletPath,
      "--simnet",
      "--dcrlnd.host=127.0.0.1:10009",
      "--dcrlnd.macaroonpath="+walletPath+"/dcrlnd/admin.macaroon",
      "--dcrlnd.tlscertpath="+walletPath+"/dcrlnd/tls.cert",
      ...extraArgs
    ];
    const cli = spawn("mrttreeclient", args, {
      stdio: ["ignore", "pipe", "pipe"]
    });

    cli.stdout.on("data", (data) => console.log(data.toString("utf-8")));
    cli.on("close", code => code === 0 ? resolve() : reject());
  });
}

function doJoinSession(sessID, walletName) {
  return doMrttreeClient(walletName, ["join", sessID]);
}

function doRedeem(sessionToken, leafKey, walletName) {
  return doMrttreeClient(walletName, ["redeem", sessionToken, leafKey]);
}

const MrttreeTab = () => {

  const [leafKey, setLeafKey] = useState("");
  const [sessionID, setSessionID] = useState("");
  const [sessionToken, setSessionToken] = useState("");
  const walletName = useSelector(sel.getWalletName);
  const [existSessToken, setExistSessToken] = useState("");
  const [existKeys, setExistKeys] = useState("");
  const [existTxs, setExistTxs] = useState(0);
  const [first, setFirst] = useState(false);
  const dispatch = useDispatch();


  const leafKeyChanged = (e) => {
    const newKey = e.target.value;
    setLeafKey(newKey);
  };

  useEffect(() => {
    const walletPath = getWalletPath("simnet", walletName);
    try {
      const userSess = fs.readFileSync(walletPath+"/user-session", "utf8");
      const userKeys = fs.readFileSync(walletPath+"/user-keys", "utf8");
      const userTxs = fs.readFileSync(walletPath+"/user-txs", "utf8");
      setExistSessToken(userSess);
      setExistKeys(userKeys);
      setExistTxs(userTxs);
    } catch (error) { }
  }, [first, walletName]);


  const sessionIDChanged = (e) => setSessionID(e.target.value);
  const sessionTokenChanged = (e) => setSessionToken(e.target.value);
  const joinSession = async () => {
    await doJoinSession(sessionID, walletName);
    setFirst(first+1);
    dispatch(lna.listLatestPayments());
  };

  const redeem = async () => {
    await doRedeem(sessionToken, leafKey, walletName);
  };

  let exist = null;
  if (existSessToken) {
    exist = <>
    <br/><br/>
    <h2>Last MRTTREE</h2>
    <br/>
    <p>Session Token: {existSessToken}</p>
    <p>Leaf Keys:</p>
    <textarea rows="10" defaultValue={existKeys}></textarea>
    <p>Tree Transactions:</p>
    <textarea rows="10" defaultValue={existTxs}></textarea>
    </>;
  }

  return (
    <>
      <h2>Join MRTTREE</h2>
      <br/>
      <p>Server: mrttree.decred.org</p>
      <p>Leaf Amount: 0.00010000 DCR</p>
      <p>Nb Leafs: 8</p>
      <p>Session ID</p>
      <TextInput value={sessionID} onChange={sessionIDChanged} />
      <br/>
      <KeyBlueButton onClick={joinSession}>Join MRTTREE</KeyBlueButton>

      {exist}

      <br/><br/>
      <h2>Redeem Leaf</h2>
      <br/>
      <p>Session Token</p>
      <TextInput value={sessionToken} onChange={sessionTokenChanged} />
      <br/>
      <p>Leaf Key</p>
      <TextInput value={leafKey} onChange={leafKeyChanged} />
      <br/>
      <KeyBlueButton onClick={redeem}>Redeem</KeyBlueButton>
    </>
  );
};

export default MrttreeTab;
