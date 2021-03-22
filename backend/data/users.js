import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'test@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kurt Guardia',
    email: 'kurtguardia@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Morty Smith',
    email: 'mortysmith@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Rick Sanchez',
    email: 'ricksanchez@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
