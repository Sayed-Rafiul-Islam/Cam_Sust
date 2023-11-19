import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './sanity/schemas'
const config = defineConfig({
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset : "production",
    title : "cam sust",
    apiVersion : "2023-11-05",
    basePath : process.env.NEXT_PUBLIC_SANITY_BASEPATH,
    plugins: [deskTool(), visionTool()],
    schema : {types : schemas },
})

export default config;