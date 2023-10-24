export class UrlManager {
  static getBaseUrl(): string {
    return process.env.BASE_URL as string;
  }
  static getLoginUrl(): string {
    return `${this.getBaseUrl()}/notesnest/login`;
  }

  static getSignupUrl(): string {
    return `${this.getBaseUrl()}/notesnest/signup`;
  }
}
