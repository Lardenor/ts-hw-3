// task 1 
// task 1 

// task 1 

// task 1 

// task 1 

// task 1 

interface Shape {
  name: string;
  calculateArea: () => number;
}

class Circle implements Shape {
  name: string;
  radius: number;

  constructor(radius: number) {
    this.name = 'Circle';
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  name: string;
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.name = 'Rectangle';
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}



const circle = new Circle(5);
console.log(`Area of ${circle.name}: ${circle.calculateArea()}`);

const rectangle = new Rectangle(3, 4);
console.log(`Area of ${rectangle.name}: ${rectangle.calculateArea()}`);
// !task 2
// !task 2

// !task 2
// !task 2
// !task 2
// !task 2

interface Settings {
  theme?: string;
  fontSize?: number;
  isDarkMode?: boolean;
}

function updateSettings(settings: Settings): void {

  console.log('Updating settings...');
  console.log('New settings:', settings);
}



const newSettings: Settings = {
  theme: 'light',
  fontSize: 14,
  isDarkMode: true,
};

updateSettings(newSettings);
// * task 3
// * task 3
// * task 3
// * task 3
// * task 3
// * task 3
interface User {
  name: string;
  age: number;
}

interface Account {
  username: string;
  email: string;
}

interface UserProfile extends User, Account {}

function getUserProfile(user: User, account: Account): UserProfile {
  const userProfile: UserProfile = {
    ...user,
    ...account,
  };
  return userProfile;
}


const user: User = {
  name: 'John Doe',
  age: 25,
};

const account: Account = {
  username: 'johndoe',
  email: 'johndoe@example.com',
};

const userProfile = getUserProfile(user, account);
console.log(userProfile);

