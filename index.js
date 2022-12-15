// import customer from './customer';
// import advisor from './advisor';

const user = {
  id: 1,
  name: 'Huyen Pham',
  role: 'customer',
};
  // {
  //   id: 1,
  //   name: 'Huyen Pham',
  //   role: 'advisor',
  // };

async function printUser() {
  if (user.role === 'customer') {
    const { customer } = await import('./customer.js');
    customer(user.name);
  } else {
    const { advisor} = await import('./advisor.js');
    advisor(user.name);
  }
}

// function printUser() {
//   if (user.role === 'customer') {
//       customer(user.name);
//   } else {
//     advisor(user.name);
//   }
// }

printUser();