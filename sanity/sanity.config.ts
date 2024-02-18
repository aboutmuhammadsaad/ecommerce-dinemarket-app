import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'products-ecomm--dataset',

  projectId: 'dugavptz',
  dataset: 'products',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
