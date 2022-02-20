class Users {
      constructor(email, password,name,phoneNumber) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.phoneNumber = phoneNumber;
      }
      getEmail() {
        return this.email;
      }
      setEmail(email) {
        this.email = email
      }
      getName() {
        return this.name;
      }
      setName(name) {
        this.name = name
      }
      getPassword() {
        return this.password;
      }
      setPassword(password) {
        this.password = password
      }
      getPhoneNumber() {
        return this.phoneNumber;
      }
      setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber
      }
}
module.exports.Users = Users;

