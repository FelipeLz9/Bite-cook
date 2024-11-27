module.exports = {
  locales: ['en', 'es'],
  defaultLocale: 'es',
  loadLocaleFrom: (locale: any, namespace: any) =>
    import(`./locales/${locale}/${namespace}.json`).then((m) => m.default),
};
