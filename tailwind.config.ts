import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    content: ['blocks/**/*.vue'],
    theme: {
        extend: {
            colors: {
                app_red: {
                    50: '#fef2f2',
                    100: '#ffe1e1',
                    200: '#ffc8c8',
                    300: '#ffa3a2',
                    400: '#fd6d6c',
                    500: '#f53f3e',
                    600: '#d31c1b',
                    700: '#bf1716',
                    800: '#9d1817',
                    900: '#821b1a',
                    950: '#470808',
                }
            }
        }
    }
}
