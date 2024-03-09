export interface ModuleOptions {}

declare module "nuxt-bootstrap-css" {
  interface NuxtConfig {
    bootstrap?: ModuleOptions;
  }

  interface NuxtOptions {
    bootstrap?: ModuleOptions;
  }
}
