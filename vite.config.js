import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import includePaths from "@mozaic-ds/css-dev-tools/sassConfig";
import pluginList from "@mozaic-ds/css-dev-tools/postcssPluginConfig";

const plugins = pluginList.filter(
  ({ postcssPlugin }) => postcssPlugin !== "stylelint"
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  css: {
    postcss: {
      plugins: plugins,
    },
    preprocessorOptions: {
      scss: {
        includePaths: [
          "./node_modules/@mozaic-ds/styles/",
          "./node_modules/@mozaic-ds/styles/components/",
          "./node_modules/@mozaic-ds/styles/generic/",
          "./node_modules/@mozaic-ds/styles/layouts/",
          "./node_modules/@mozaic-ds/styles/settings-tools/",
          "./node_modules/@mozaic-ds/styles/typography/",
          "./node_modules/@mozaic-ds/styles/utilities/",
          "./node_modules/@mozaic-ds/tokens/build/css/",
          "./node_modules/@mozaic-ds/tokens/build/scss/",
          "./node_modules/",
        ],
      },
    },
  },
});