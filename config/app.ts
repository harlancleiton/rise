export const appConfig: AppConfig = {
  name: 'Rise',
  port: process.env.PORT || 3333,
  address: process.env.ADDRESS || '0.0.0.0'
};

export interface AppConfig {
  name: string;
  port: number | string;
  address: string;
}
