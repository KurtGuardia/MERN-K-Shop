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
  },
  {
    name: 'Maria Lucero',
    email: 'marialucero@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
