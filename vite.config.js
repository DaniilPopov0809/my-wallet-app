// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



  import nodePolyfills from "rollup-plugin-polyfill-node";
  const production = process.env.NODE_ENV === "production";

  export default {
    plugins: [
      !production &&
        nodePolyfills({
          include: ["node_modules/**/*.js", new RegExp("node_modules/.vite/.*js")]
        })
    ],

    build: {
      rollupOptions: {
        plugins: [
          nodePolyfills(),
          
        ]
      },
      commonjsOptions: {
        transformMixedEsModules: true
      }
    }
  };

