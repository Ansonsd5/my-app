import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Anson",
    lastName: "Dsouza",
    email: "anson11@gmail.com",
    password: "anson11",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Anson",
        street: "5, Indira Nagar",
        city: "Mangalore",
        state: "Karnataka",
        zipcode: "575014",
        country: "India",
        mobile: "9148889961",
      },
      {
        _id: uuid(),
        name: "Vikrant Sharma",
        street: "M.G. Road",
        city: "Bangalore",
        state: "Karnataka",
        zipcode: "370082",
        country: "India",
        mobile: "9394052424",
      },
    ],
  },
];
