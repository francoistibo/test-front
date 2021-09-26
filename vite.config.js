// vite.config.js
import postcssPxtoremPlugin from 'postcss-pxtorem'
import postcssSortmediaqueriesPlugin from 'postcss-sort-media-queries'

export default {
  base: './',
  plugins: [postcssPxtoremPlugin(), postcssSortmediaqueriesPlugin()]
}
