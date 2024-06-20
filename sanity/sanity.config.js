import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {IconManager} from 'sanity-plugin-icon-manager'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'bqbhhten',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    IconManager({
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
