const path=require("path");

module.exports={
  webpack: {
    alias: {
      '@api': path.resolve(__dirname, "src/api/"),
      '@components': path.resolve(__dirname, "src/components/"),
      '@pages': path.resolve(__dirname, "src/pages/"),
      '@redux': path.resolve(__dirname, "src/redux/"),
    }
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};