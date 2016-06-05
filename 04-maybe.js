bob = {
  id:'bob',
  address:{
    email:'bob@github.com',
    country:'US'
  }
};

john = {
  id:'john',
  address:{
    country:'US'
  }
};

jane = {
  id:'jane'
};

buddies = [bob, john, jane];

getMailById = (id, buddies) => {
  let email = buddies.find(buddy => buddy.id == id).address.email;
  if(email === null || email === undefined) {
    return "no email"
  }
  return email
};

getMailById('bob', buddies)
getMailById('john', buddies)
getMailById('jane', buddies)
getMailById('sam', buddies)

getMailById = (id, buddies) => {
  return Maybe.fromNullable(buddies.find(buddy => buddy.id == id))
    .map(buddy => buddy.address) // return address of buddy
    .map(address => address.email) // return email of address
    .getOrElse('no email!')
};
