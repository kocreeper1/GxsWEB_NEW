/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './app.{js,ts,vue}'
    ],
    important: true,
    // safelist: ["dark"],
    // darkMode: "class",
    theme: {
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                hb: {
                    Text: '#fff',
                    hoverText: '#F5F0BB',
                    Green: '#F1E390',
                    hoverGreen: '#FFE194',
                    clickGreen: '#FFB84C',
                    Yellow: '#F1E390',
                    Bg: '#282120'
                },
                gxs: {
                    primary: 'var(--gxs-primary)',
                    sgxsondary: 'var(--gxs-secondary)',
                    success: 'var(--gxs-success)',
                    danger: 'var(--gxs-danger)',
                    warning: 'var(--gxs-warning)',
                    info: 'var(--gxs-info)',
                    light: 'var(--gxs-light)',
                    dark: 'var(--gxs-dark)',
                    body: 'var(--gxs-body)',
                    muted: 'var(--gxs-muted)',
                    white: 'var(--gxs-white)',
                    'black-50': 'var(--gxs-black-50)',
                    'white-50': 'var(--gxs-white-50)',
                    disable: 'var(--gxs-disable)',
                    'border': 'var(--gxs-border)',
                    bg: 'var(--gxs-bg)',
                }
            },
            animation: {
                move: 'svgMove 5s ',
            },
            keyframes: {
                svgMove: {
                    '0%': { strokeDasharray: '0, 600px' },
                    '100%': { strokeDasharray: '600px, 0' },
                }
            },
            boxShadow: {
                small: 'var(--gxs-shadow-small)',
                regular: 'var(--gxs-shadow-regular)',
                large: 'var(--gxs-shadow-large)',
            }
        }
    },
    plugins: []
}