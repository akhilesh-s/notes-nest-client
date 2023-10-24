import logger from '@/lib/logger';

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

  /**
   *
   * @param pwd
   * @returns true or false if password rules are followed or not
   */
  static isValidPassword(pwd: string): boolean {
    if (pwd) {
      const regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (regex.test(pwd)) {
        return true;
      }

      return false;
    }

    return false;
  }

  static setCookie(name: string, value: string | boolean, days?: number): void {
    let expires = '';

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }

    document.cookie = `${name}=${value}${expires}; path=/`;
  }

  static getCookie(name: string): string | null {
    const cookies = document.cookie.split('; ');

    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');

      if (cookieName === name) {
        logger('value', cookieValue);

        return cookieValue;
      }
    }

    return null;
  }
}
