import babel from 'rollup-plugin-babel'
import pkg from './package.json'
const config = {
  input: 'index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'Example'
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: 'Example'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [babel({ exclude: 'node_modules/**' })]
}

export default config
