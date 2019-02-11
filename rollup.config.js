import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';


export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/handtrack.min.js',
    format: 'umd',
    name: 'handTrack',
  }, {
    file: 'demo/handtrack.min.js',
    format: 'umd',
    name: 'handTrack',
  }],
  // plugins: [resolve(), minify()]
  plugins: [resolve()]
}