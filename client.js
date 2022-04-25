const données = "APP_COURRIEL_MESSAGES";
var messages = getdonnées();
function getdonnées() {
  if (JSON.parse(localStorage.getItem(données)) != null)
    return JSON.parse(localStorage.getItem(données));
  else return [];
}
// structure de valeurs à sauvegarder.
function senddonnées() {
  let email = document.getElementById("inputEmailD").value;
    var msg = document.getElementById("inputMsg").value,
  encryptedMsg = forge.util.encode64( keyPair.publicKey.encrypt( forge.util.encodeUtf8(msg)));
const val = {
    id: messages.length + 1,
    email: email,
    privatekey: privateKey,
    publicKey:publicKey,
    msg:encryptedMsg ,
    date:
      new Date().getDate() +
      "/" +
      new Date().getMonth() +
      1 +
      "/" +
      new Date().getFullYear(),

    heure: new Date().toLocaleTimeString("fr-FR", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    }),
  };
  messages.push(val);
  



  saveMsg(messages);
}
// save in localstorage
function saveMsg(value) {
  localStorage.setItem(données, JSON.stringify(value));
}
var getKeyPair = () => {
  var keyPair, pem = localStorage.getItem("pem");
  if (pem) {
    privateKey = forge.pki.privateKeyFromPem(pem);
    publicKey = forge.pki.setRsaPublicKey(privateKey.n, privateKey.e);
    keyPair = {privateKey, publicKey};
  } else {
    keyPair = forge.pki.rsa.generateKeyPair({bits: 1024});
    localStorage.setItem("pem",forge.pki.privateKeyToPem(keyPair.privateKey));
  };
  return keyPair;
};

var keyPair = getKeyPair();

console.log("Ma clef publique est:", forge.pki.publicKeyToPem(keyPair.publicKey));

document.getElementById("send").addEventListener('click', event => {
  try {
    var msg = document.getElementById("inputMsg").value,
   // publickey=keyPair.publicKey,
        encryptedMsg = forge.util.encode64( keyPair.publicKey.encrypt( forge.util.encodeUtf8(msg)));
       const valeur=` message:${encryptedMsg},
       publickey:${forge.pki.publicKeyToPem(keyPair.publicKey)}`
        
       
    fetch( "/addLetter", { method: "POST", body:valeur } )
    .then( _ => console.log(`Message envoyé: ${encryptedMsg}`) )
    .catch( err => console.error(err) );
  } catch (err) { console.error(err); };
});

var reload = () => 
  fetch("/getLetters")
  .catch(err => console.error(err) )
  .then(resp => resp.json())
  .then(msgs => {
    var list = document.querySelector("div.result");
    list.innerHTML = "";
    msgs.forEach( encryptedMsg => {
      try {
        var decryptedMsg = forge.util.decodeUtf8(keyPair.privateKey.decrypt(forge.util.decode64(encryptedMsg))),
            li = document.createElement("div");
        li.innerText = decryptedMsg;
        list.appendChild(li);
      } catch {};
    });
  });

document.getElementById("decrypt").addEventListener('click', decrypt);


