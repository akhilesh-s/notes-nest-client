export interface ISignupUser {
  username: string;
  emailId: string;
  password: string;
  confirmedPassword: string;
}

export interface ILoginUser {
  userId: string;
  password: string;
}
