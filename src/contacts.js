const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join('db', 'contacts.json');

async function listContacts() {
    // ...твій код. Повертає масив контактів.
    try {
        const resReadFile = await fs.readFile(contactsPath, 'utf8');
console.log(resReadFile);
        return resReadFile;
        
    }
    catch (err) {
		console.log('что-то пошло не так');
	}
    
}

// async function getContactById(contactId) {
//   // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
// }

// async function removeContact(contactId) {
//   // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
// }

// async function addContact(name, email, phone) {
//   // ...твій код. Повертає об'єкт доданого контакту (з id).
// }

listContacts();


