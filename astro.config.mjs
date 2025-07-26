// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        define: {
            // Expose the API key to client-side code
            'import.meta.env.PUBLIC_ARCGIS_API_KEY': JSON.stringify(process.env.apikey)
        }
    },
    integrations: [preact()],
});
