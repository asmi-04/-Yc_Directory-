// import {defineCliConfig} from 'sanity/cli'


// export default defineCliConfig({
//   api: {
//     projectId: 't5nm8g8m',
//     dataset: 'production'
//   },
//   deployment: {
//     /**
//      * Enable auto-updates for studios.
//      * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
//      */
//     autoUpdates: true,
//   },
// })

import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "t5nm8g8m",
    dataset: "production",
  },

  schemaExtraction: {
    enabled: true,
  },

  typegen: {
    path: [
      "../../sanity/**/*.ts",
      "../../app/**/*.{ts,tsx,js,jsx}",
    ],
    schema: "../../sanity/extract.json",
    generates: "../../sanity/types.ts",
  },
});