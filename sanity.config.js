import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas'
const config = defineConfig({
    projectId : "f89xy3cs",
    dataset : "production",
    title : "cam sust",
    apiVersion : "2023-11-05",
    basePath : "/admin",
    plugins: [deskTool()],
    schema : {types : schemas },
})

export default config;