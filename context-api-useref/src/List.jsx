const dataUser = [
  {
    name: "max",
    age: 42,
    mailAddress: "hello@mail.com",
    contactNumber: "123456789",
  },
  {
    name: "max",
    age: 42,
    mailAddress: "hello@mail.com",
    contactNumber: "123456789",
  },
  {
    name: "max",
    age: 42,
    mailAddress: "hello@mail.com",
    contactNumber: "123456789",
  },
  {
    name: "max",
    age: 42,
    mailAddress: "hello@mail.com",
    contactNumber: "123456789",
  },
  {
    name: "max",
    age: 42,
    mailAddress: "hello@mail.com",
    contactNumber: "123456789",
  },

  {
    name: "max",
    age: 42,
    mailAddress: "hello@mail.com",
    contactNumber: "123456789",
  },
  {
    name: "max",
    age: 42,
    mailAddress: "hello@mail.com",
    contactNumber: "123456789",
  },
  {
    name: "max",
    age: 42,
    mailAddress: "hello@mail.com",
    contactNumber: "123456789",
  },
  {
    name: "max",
    age: 42,
    mailAddress: "hello@mail.com",
    contactNumber: "123456789",
  },
  {
    name: "max",
    age: 42,
    mailAddress: "hello@mail.com",
    contactNumber: "123456789",
  },
];

function UserList() {
  return (
    <div>
      <h1> Our Web Users</h1>

      <div className="userParent">
        {dataUser.map((item, index) => (

          <div className="user" key={index}>
            <h3>{item.name}</h3>
            <span>{item.contactNumber}</span>
            <p>{item.mailAddress}</p>
            <p>{item.age}</p>
            <button>Contact Us</button>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default UserList;
