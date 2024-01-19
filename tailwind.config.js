/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "custom-pink": "#EF476F",
                "custom-yellow": "#FFD166",
                "custom-green": "#06D6A0",
                "custom-blue": "#118AB2",
                "custom-dark-blue": "#073B4C",
            },
            backgroundImage: {
                "custom-gradient": "background: linear-gradient(90deg, var(--green-color) 0%, var(--blue-color) 100%)"
            }     
        },
    },
    plugins: [],
};
