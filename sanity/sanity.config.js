import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {IconManager} from 'sanity-plugin-icon-manager'
import { simplerColorInput } from 'sanity-plugin-simpler-color-input';

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'bqbhhten',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    IconManager({}),
    simplerColorInput({
      defaultColorFormat: 'hex', 
      enableSearch: true, 
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
