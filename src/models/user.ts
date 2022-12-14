interface LoginInterface {
  email: string;
  password: string;
}

interface SignUpInterface {
  email: string;
  password: string;
  username: string;
  first_name: string;
  last_name: string;
}

interface FlatInterface {
  id: string;
  avatar: string;
  username: string;
  first_name?: string;
  last_name?: string;
}

interface UpdateInterface {
  id: any;
  avatar?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
}

interface User {
  id: any;
  avatar: string;
  username: string;
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
}

declare namespace User {
  /**
   * API payload for logging into a user
   */
  interface Login extends LoginInterface { }
  /**
   * API payload for creating a user
   */
  interface SignUp extends SignUpInterface { }
  /**
   * Flattened user object
   */
  interface Flat extends FlatInterface { }
  /**
   * API payload to edit a user
   */
  interface Update extends UpdateInterface { }
}

export default User;
