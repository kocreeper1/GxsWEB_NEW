import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    // 使用到的套件
    modules: [
        '@nuxtjs/tailwindcss',
        // '@element-plus/nuxt'
    ],

    // components的配置
    components: [
        {
            global: true,
            path: '~/components/',
            pathPrefix: false,
            extensions: ['.vue'],
        }
    ],

    // css
    css: [
        '~/assets/sass/app.scss',
        '~/assets/sass/tailwind.scss',
        'element-plus/dist/index.css',
    ],

    app: {
        // 動畫
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
        head: {
            meta: [
                // { name: 'google-site-verification', content: '77iFFXtD8szKWL5Xw9f9-SqeomLzmPFbwAWp_GrXLrY' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0' },
                { name: 'description', content: `Gxs台灣模組伺服器` },
                { name: 'description', content: `阿倫` },
                { name: 'keywords', content: `Gxs台灣模組伺服器,麥塊,Minecraft,伺服器` },
                { property: 'og:title', content: `GxsServer` },
                { property: 'og:description', content: `Gxs台灣模組伺服器` },
                { property: 'og:image', content: `/logo.png` },
            ],
        }
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    vite:{
        plugins:[
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'assets/svg')]
              }),
        ]
    },

    




})
