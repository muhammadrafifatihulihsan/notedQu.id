/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ios: {
                    blue: '#007AFF',
                    lightBlue: '#5AC8FA',
                    green: '#34C759',
                    yellow: '#FFCC00',
                    orange: '#FF9500',
                    red: '#FF3B30',
                    pink: '#FF2D55',
                    purple: '#AF52DE',
                    gray: {
                        50: '#F9F9F9',
                        100: '#F2F2F7',
                        200: '#E5E5EA',
                        300: '#D1D1D6',
                        400: '#C7C7CC',
                        500: '#AEAEB2',
                        600: '#8E8E93',
                        700: '#636366',
                        800: '#48484A',
                        900: '#3A3A3C',
                    }
                },
                paper: {
                    cream: '#FFFEF7',
                    lined: '#E8E5D8',
                }
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'paper': '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
                'paper-hover': '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
                'ios': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
                'ios-lg': '0 10px 25px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.06)',
            },
            borderRadius: {
                'ios': '10px',
                'ios-lg': '16px',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
                'slide-in': 'slideIn 0.3s ease-out',
                'scale-in': 'scaleIn 0.2s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
