import { FastifyReply } from 'fastify';

import { ResponseContract } from '~/common/presentation';

export class FastifyReplyAdapter implements ResponseContract {
  constructor(private readonly reply: FastifyReply) {}

  public ok(body: any): void {
    this.reply.status(200).send(body);
  }

  public created(body: any): void {
    this.reply.status(201).send(body);
  }

  public noContent(): void {
    this.reply.status(204).send();
  }

  public badRequest(body: any): void {
    this.reply.status(400).send(body);
  }

  public unauthorized(body?: any): void {
    this.reply.status(401).send(body);
  }

  public paymentRequired(body?: any): void {
    this.reply.status(402).send(body);
  }

  public forbidden(body?: any): void {
    this.reply.status(403).send(body);
  }

  public notFound(body?: any): void {
    this.reply.status(404).send(body);
  }

  public unprocessableEntity(body?: any): void {
    this.reply.status(422).send(body);
  }

  public internalServerError(body?: any): void {
    this.reply.status(500).send(body);
  }

  public badGateway(body?: any): void {
    this.reply.status(502).send(body);
  }

  public status(status: number): this {
    this.reply.status(status);

    return this;
  }

  public send(body: any): void {
    this.reply.send(body);
  }
}
