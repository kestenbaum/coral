/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'sans': ['Roboto'],
        },
        extend: {
            backgroundImage: {
                'woman-pattern': "url('./assets/woman.jpg')",
            }
        },
    },
    plugins: [],
}
