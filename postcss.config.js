module.exports = () => ({
  plugins: [
    require("tailwindcss"),
    require("postcss-px2rem")({
      remUnit: 75, // 1rem = 75px 将设计稿宽度设为web 750px
      propList: ["*"],
    }),
    require("autoprefixer"),
  ],
});
