import "easymde/dist/easymde.min.css"
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { markdownSchema } from 'sanity-plugin-markdown'
import { schemaTypes } from './schemaTypes'
import { projectId, dataset, apiVersion } from './env'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'JSM YC Directory',

  projectId,
  dataset,

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    markdownSchema(),
  ],

  schema: {
    types: schemaTypes.types,
  },
})