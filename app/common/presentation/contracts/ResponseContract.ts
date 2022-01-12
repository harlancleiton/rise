export interface ResponseContract {
  ok(body: any): void;
  created(body: any): void;
  noContent(): void;

  badRequest(body: any): void;
  unauthorized(body?: any): void;
  paymentRequired(body?: any): void;
  forbidden(body?: any): void;
  notFound(body?: any): void;
  unprocessableEntity(body?: any): void;

  internalServerError(body?: any): void;
  badGateway(body?: any): void;

  status(status: number): this;
  send(body: any): void;
}
