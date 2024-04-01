type CustomerName = {
  name: string;
};

type Email = {
  email: string;
};

type Phone = {
  phone: number;
};

type ContactDetails = CustomerName & Email & Phone;

function contact(contact: ContactDetails) {
  console.log(contact.name, contact.email, contact.phone);
}

contact({
  name: "sravanthi",
  email: "test@gmail.com",
  phone: 1233,
});
