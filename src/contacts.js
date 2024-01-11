const fs = require("fs").promises;
const path = require("path");
import { nanoid } from "nanoid";
const contactsPath = path.join("db", "contacts.json");

async function listContacts() {
  // ...твій код. Повертає масив контактів.
  try {
    const resReadFile = await fs.readFile(contactsPath, "utf8");
    const resArr = JSON.parse(resReadFile);
    // console.log(resArr);
    return resArr;
  } catch (err) {
    console.log("Error: ", err);
  }
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  try {
    const resReadFile = await fs.readFile(contactsPath, "utf8");
    const resArr = JSON.parse(resReadFile);

    const resId = resArr.find((newArr) => newArr.id === contactId);
    // console.log("----------------------------");
    // console.log(resId);
    if (resId) return resId;
    return null;
  } catch (err) {
    console.log("Error: ", err);
  }
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  try {
    const resReadFile = await fs.readFile(contactsPath, "utf8");
    const resArr = JSON.parse(resReadFile);

    const objId = resArr.find((newArr) => newArr.id === contactId);
    const objDelId = resArr.filter((newArr) => newArr.id !== contactId);

    await fs.writeFile(contactsPath, JSON.stringify(objDelId));

    if (objId) return objId;
    return null;
  } catch (err) {
    console.log("Error: ", err);
  }
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
  try {
    const resReadFile = await fs.readFile(contactsPath, "utf8");
    const resArr = JSON.parse(resReadFile);

    const addObj = { id: nanoid(), name, email, phone };
    // const addObj = { id: "dgfdgdfgdfg", name, email, phone };
    resArr.push(addObj);
    await fs.writeFile(contactsPath, JSON.stringify(resArr));

    console.log(addObj);
    return addObj;
  } catch (err) {
    console.log("Error: ", err);
  }
}

//listContacts();

// getContactById("AqdggE76Jtbfd9eWJHrssH");
// getContactById("drsAJ4SHPYqZeG-83QTVW");
//removeContact("e6ywwRe4jcqxXfCZOj_1e");
addContact("Sergii", "ser_ega@ukr.net", "34535677-45");

module.exports = { listContacts, getContactById, removeContact, addContact };
