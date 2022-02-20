const Config = require('../config.js');
const firebase = require('../firebase.js');
const db = firebase.db;
const database = "users";
class UsersRepository {
       async  connect_email(email) {
        var response = await db.collection(database).where("email","==",email).limit(1).get();
            var profile ;
            response.forEach(function(docs){
                profile = docs.data();
            });
            return profile;
       }
       async connect_register(jsonObj) {
            const docRef = await db.collection(database).add(jsonObj);
            return docRef;
       }
}
module.exports.UsersRepository = UsersRepository;

