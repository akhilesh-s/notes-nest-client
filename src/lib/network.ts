import { IUnknownRecord } from '@/common/types/base';

export class Network {
  static async fetch(
    url: string,
    options: RequestInit = {},
    data: IUnknownRecord | null = null
  ): Promise<Response> {
    if (data) {
      options.body = JSON.stringify(data);
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    }
    const response = await fetch(url, options);

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Something went wrong');
    }

    return response;
  }
}
