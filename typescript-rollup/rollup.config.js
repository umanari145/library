import typescript from 'rollup-plugin-typescript';

export default {
  input: './main.ts',
  output: {
    file: './main.js',
    format: 'iife'
  },
  plugins: [
    typescript()
  ]
}
