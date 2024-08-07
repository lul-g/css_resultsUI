/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "rgb(var(--primary-light-red) / <alpha-value>)",
        "primary-yellow": "rgb(var(--primary-orangey-yellow) / <alpha-value>)",
        "primary-teal": "rgb(var(--primary-green-teal) / <alpha-value>)",
        "primary-cobalt": "rgb(var(--primary-cobalt-blue) / <alpha-value>)",
        "neutral-white": "var(--neutral-white)",
        "neutral-pale": "var(--neutral-pale-blue)",
        "neutral-lavander": "var(--neutral-lavander)",
        "neutral-gray": "hsl(var(--neutral-gray-blue) / <alpha-value>)",
        "slate-blue": "var(--gr-light-slate-blue)",
        "royal-blue": "var(--gr-light-royal-blue)",
        "violet-blue": "var(--gr-violet-blue)",
        "persian-blue": "var(--gr-persian-blue)",
      },
      fontFamily: {
        Hanken: ["HankenGrotesk, sans-serif"],
        Inter: ["Inter, sans-serif"],
      },
      fontSize: {
        para: "var(--font-size-p)", //18px
      },
      boxShadow: {
        "3xl": "0 0 40px -10px rgba(0, 21, 182, 0.3)",
      },
      backgroundImage: (theme) => ({
        "grb-slate-to-royal": `linear-gradient(to bottom, ${theme("colors.slate-blue")} 0%, ${theme("colors.royal-blue")} 75%)`,
        "grb-persian-to-royal": `linear-gradient(to bottom, ${theme("colors.violet-blue")}, ${theme("colors.royal-blue")})`,
      }),
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
