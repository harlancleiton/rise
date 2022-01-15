export interface CalculateBalance {
  execute(userId: string): Promise<string>;
}
