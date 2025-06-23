import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "planning",
      filename: "remoteEntry.js",
      remotes: {
        shell: "http://172.20.136.101:5000/dist/assets/remoteEntry.js",
      },

      exposes: {

     "./CreateItem": "./src/components/Item/CreateItem.jsx",
     "UpdateItem": "./src/components/Item/UpdateItem.jsx",
     "./ListItems": "./src/components/Item/ItemList.jsx",
     "DeleteItem": "./src/components/Item/DeleteItem.jsx",


     "CreateInspection": "./src/components/Inspection/CreateInspection.jsx",
     "UpdateInspection": "./src/components/Inspection/EditInspection.jsx",
     "DeleteInspection": "./src/components/Inspection/DeleteInspection.jsx",
     "ListInspectedItem": "./src/components/Inspection/ListInspectedItem.jsx",

     "AppLogin": "./src/components/AppLogin.jsx",

        
       

      },
      shared: [
        "react",
        "react-dom",
        "@mui/material",
        // '@mui/icons-material',
        "@mui/x-data-grid",
        "react-router-dom",
        "jotai",
      ],
      dev: true,
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5008,
    hmr: true,
  },
});
