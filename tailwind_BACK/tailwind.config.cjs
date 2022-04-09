const generateColorClass = (variable) => {
    // const generateColorClass = (variable) => {
    return ({ opacityValue }) => opacityValue
        ? `rgba(var(--${variable}), ${opacityValue})`
        : `rgb(var(--${variable}))`;
};
const textColor = {
    primary: generateColorClass('text-primary'),
    secondary: generateColorClass('text-secondary'),
    tertiary: generateColorClass('text-tertiary'),
};
const backgroundColor = {
    primary: generateColorClass('bg-primary'),
    secondary: generateColorClass('bg-secondary'),
    tertiary: generateColorClass('bg-tertiary'),
};
module.exports = {
    content: ['./src/**/*.{html,js,ts,css,svelte}'],
    darkMode: 'class',
    theme: {
        extend: {
            textColor,
            backgroundColor,
            // colors: {
            //   "primary": "#38bdf8",
            //   "secondary": "#818CF8",
            //   "accent": "#F471B5",
            //   "accent": "#1E293B",
            //   "neutral": "#273449",
            //   "base-100": "#0F172A",
            //   "info": "#0CA5E9",
            //   "success": "#2DD4BF",
            //   "warning": "#F4BF50",
            //   "error": "#FB7085",
            //   // "base-content":
            // }
        },
    },
    plugins: [
    // require('@tailwindcss/typography'),
    ],
};
