import Utils from '@/lib/utils';

export class AuthService {
  static isLoggedIn(): boolean {
    const cookie = Utils.getCookie('isLoggedIn');

    if (cookie === 'true') {
      return true;
    }

    return false;
  }
}
