/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: ["class"],
    theme: {
        extend: {
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            colors: {
                "Primary-BrightBlue": "hsl(220, 98%, 61%)",
                "Check-Background-from": "hsl(192, 100%, 67%)",
                "Check-Background-to": "hsl(280, 87%, 65%)",
                "LightTh-Very-Light-Gray": "hsl(0, 0%, 98%)",
                "LightTh-Very-Light-Grayish-Blue": "hsl(236, 33%, 92%)",
                "LightTh-Light-Grayish-Blue": " hsl(233, 11%, 84%)",
                "LightTh-Dark-Grayish-Blue": "hsl(236, 9%, 61%)",
                "LightTh-Very-Dark-Grayish-Blue": "hsl(235, 19%, 35%)",
                "DarkTh-Very-Dark-Blue": "hsl(235, 21%, 11%)",
                "DarkTh-Very-Dark-Desaturated-Blue": "hsl(235, 24%, 19%)",
                "DarkTh-Grayish-Blue": "hsl(234, 39%, 85%)",
                "DarkTh-Light-Grayish-Blue-hover": "hsl(236, 33%, 92%)",
                "DarkTh--Grayish-Blue": "hsl(234, 11%, 52%)",
                "DarkTh-Very-Dark-Grayish-Blue": "hsl(233, 14%, 35%)",
                "DarkTh-Very-Dark-Grayish-Blue": "hsl(237, 14%, 26%)",
            },
            backgroundImage: {
                "main-gradient":
                    "linear-gradient(315deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));",
            },
        },
    },
    plugins: [],
};
