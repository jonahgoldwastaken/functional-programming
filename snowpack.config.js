module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  exclude: ['.nova', 'config'],
  plugins: [
    ['@snowpack/plugin-postcss', {}],
    ['@snowpack/plugin-optimize', {}],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    sourceMaps: true,
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
}
