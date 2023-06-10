"use strict";
// task 1 
// task 1 
class Circle {
    constructor(radius) {
        this.name = 'Circle';
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle {
    constructor(width, height) {
        this.name = 'Rectangle';
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
console.log(`Area of ${circle.name}: ${circle.calculateArea()}`);
const rectangle = new Rectangle(3, 4);
console.log(`Area of ${rectangle.name}: ${rectangle.calculateArea()}`);
function updateSettings(settings) {
    console.log('Updating settings...');
    console.log('New settings:', settings);
}
const newSettings = {
    theme: 'light',
    fontSize: 14,
    isDarkMode: true,
};
updateSettings(newSettings);
function getUserProfile(user, account) {
    const userProfile = Object.assign(Object.assign({}, user), account);
    return userProfile;
}
const user = {
    name: 'John Doe',
    age: 25,
};
const account = {
    username: 'johndoe',
    email: 'johndoe@example.com',
};
const userProfile = getUserProfile(user, account);
console.log(userProfile);
