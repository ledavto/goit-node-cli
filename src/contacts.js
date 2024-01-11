//  const fs = require("fs").promises;
//  const path = require("path");
// const { nanoid } = require('../node_modules/nanoid');
import { nanoid } from "nanoid";
import path from "path";
import * as fs from 'fs/promises';

const contactsPath = path.join("db", "contacts.json");

export async function listContacts() {
  // ...твій код. Повертає масив контактів.
  try {
    const resReadFile = await fs.readFile(contactsPath, "utf8");
    const resArr = JSON.parse(resReadFile);
    return resArr;
  } catch (err) {
    console.log("Error: ", err);
  }
}

export async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  try {
    const resReadFile = await fs.readFile(contactsPath, "utf8");
    const resArr = JSON.parse(resReadFile);

    const resId = resArr.find((newArr) => newArr.id === contactId);
    if (resId) return resId;
    return null;
  } catch (err) {
    console.log("Error: ", err);
  }
}

export async function removeContact(contactId) {
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

export async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
  try {
    const resReadFile = await fs.readFile(contactsPath, "utf8");
    const resArr = JSON.parse(resReadFile);

    const addObj = { id: nanoid(), name, email, phone };
    resArr.push(addObj);
    await fs.writeFile(contactsPath, JSON.stringify(resArr));
    return addObj;
  } catch (err) {
    console.log("Error: ", err);
  }
}
