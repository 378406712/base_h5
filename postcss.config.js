module.exports = () => ({
  plugins: [
    require("tailwindcss"),
    require("postcss-px2rem")({
      remUnit: 75,
      propList: ["*"],
    }),
    require("autoprefixer"),
  ],
});
