export interface ModuleOptions {}

declare module "nuxt-bootstrap" {
  interface NuxtConfig {
    bootstrap?: ModuleOptions;
  }

  interface NuxtOptions {
    bootstrap?: ModuleOptions;
  }
}
