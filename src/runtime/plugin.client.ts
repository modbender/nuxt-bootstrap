import { defineNuxtPlugin } from "#app";

// @ts-ignore
import * as bootstrap from "bootstrap";
import * as Popper from "@popperjs/core";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      bootstrap,
      Popper,
    },
  };
});
