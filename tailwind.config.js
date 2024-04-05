/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'my-blue': '#6488CF',
                'my-orange': '#FCD5B5',
            },
        },
    },
    plugins: [],
};
