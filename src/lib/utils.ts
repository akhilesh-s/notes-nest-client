export default class Utils {
  static isBrowser(): boolean {
    return window !== undefined;
  }

  static isValidEmailId(emailId: string): boolean {
    if (emailId) {
      const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

      if (regex.test(emailId)) {
        return true;
      }

      return false;
    }

    return false;
  }

  static isValidPassword(pwd: string): boolean {
    if (pwd) {
      const regex = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;

      if (regex.test(pwd)) {
        return true;
      }

      return false;
    }

    return false;
  }
}
