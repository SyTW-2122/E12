export class User {
  constructor(name, lastName, age, email, userName, password) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.userName = userName;
    this.password = password;
  }

  getFullName() {
    return this.name + " " + this.lastName;
  }

  getAge() {
    return this.age;
  }

  getEmail() {
    return this.email;
  }

  getUserName() {
    return this.userName;
  }
}



