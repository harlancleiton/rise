import { FastifyRequest } from 'fastify';

import { RequestContract } from '~/common/presentation';

export class FastifyRequestAdapter implements RequestContract {
  constructor(private readonly request: FastifyRequest) {}

  public body<T = any>(): T {
    return this.request.body as T;
  }

  public params<T = Record<string, string>>(): T {
    return this.request.params as T;
  }

  public param<T = string>(key: string, defaultValue?: T): T | undefined {
    if (!this.request.params) return defaultValue as any;

    const params = this.request.params as any;
    return params[key] || (defaultValue as any);
  }

  public headers<T = Record<string, string>>(): T {
    return this.request.headers as any;
  }

  public header<T = string>(key: string, defaultValue?: T): T | undefined {
    if (!this.request.headers) return defaultValue as any;

    const headers = this.request.headers as any;
    return headers[key] || (defaultValue as any);
  }

  public query<T = Record<string, string>>(): T {
    return this.request.query as any;
  }
}
