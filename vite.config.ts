import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    replace({
      __ENV__: JSON.stringify(process.env.NODE_ENV || 'development'),
      __VITE_EMAILJS_USER_ID__: JSON.stringify(process.env.VITE_EMAILJS_USER_ID),
      __VITE_EMAILJS_SERVICE_ID__: JSON.stringify(process.env.VITE_EMAILJS_SERVICE_ID),
      __VITE_EMAILJS_TEMPLATE_ID__: JSON.stringify(process.env.VITE_EMAILJS_TEMPLATE_ID),
    }),
  ],
})
