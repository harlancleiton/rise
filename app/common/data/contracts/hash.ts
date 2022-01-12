export interface HashContract {
  make(value: string): Promise<string>;
  verify(hashedValue: string, plainTextValue: string): Promise<boolean>;
}
