export class ValidationError {
  constructor(
    public field: string,
    public value: ValidationError.FieldValues,
    public validation?: ValidationError.Rules,
    public children: ValidationError[] = []
  ) {}
}

export namespace ValidationError {
  export type FieldValues =
    | object
    | string
    | number
    | boolean
    | null
    | undefined
    | FieldValues[];

  export type Message = string;

  export type Rules = Partial<{
    isEmail: Message;
    isString: Message;
    required: Message;

    [key: string]: Message;
  }>;
}
