const CONTACT = "APP_COURRIEL_CONTACTS";
var contacts = getContact();

function addContact() {
  let email = document.getElementById("inputEmail").value;
  let name = document.getElementById("inputName").value;
  const val = {
    id: contacts.length + 1,
    name: name,
    email: email,
  };
  contacts.push(val);
  printContact(val);

  saveContact(contacts);
}

function deleteContact(id) {
  // const saveContact = [];
  // console.log("hello");
  // contacts.forEach((item) => {
  //   if (item.id != id) saveContact.push(item);
  // });

  console.log(id);

  // contacts = saveContact.slice();

  // saveContact(contacts);
}

function editContact(id, name, email) {
  contacts.forEach((item) => {
    if (item.id == id) {
      if (item.name != name) item.name = name;
      if (item.email != email) item.email = email;
    }
  });

  saveContact(contacts);
}

function saveContact(value) {
  localStorage.setItem(CONTACT, JSON.stringify(value));
}

function getContact() {
  if (JSON.parse(localStorage.getItem(CONTACT)) != null)
    return JSON.parse(localStorage.getItem(CONTACT));
  else return [];
}

function printContact(item) {
  var tdId = document.createElement("td");
  var tdName = document.createElement("td");
  var tdEmail = document.createElement("td");

  tdId.appendChild(document.createTextNode(item.id));
  tdEmail.appendChild(document.createTextNode(item.email));
  tdName.appendChild(document.createTextNode(item.name));

  var trSave = document.createElement("tr");

  trSave.appendChild(tdId);
  trSave.appendChild(tdEmail);
  trSave.appendChild(tdName);

  var tabInfo = document.getElementById("crslst");
  tabInfo.appendChild(trSave);

  document.getElementById("inputEmail").value = "";
  document.getElementById("inputName").value = "";
}
