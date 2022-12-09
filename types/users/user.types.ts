/**
 * User type
 * @typedef {Object} User
 * @property {number} id - User id
 * @property {string} email - User email
 * @property {string} first_name - User first name
 * @property {string} last_name - User last name
 * @property {string} avatar - User avatar
 *
 * @example
 * {
 *    "id": 7,
 *    "email": "michael.lawson@reqres.in",
 *    "first_name": "Michael",
 *    "last_name": "Lawson",
 *    "avatar": "https://reqres.in/img/faces/7-image.jpg"
 * }
 *
 */
export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
