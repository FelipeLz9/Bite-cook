import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || 'es'; 

  if (!locale) {
    return {
      locale: 'en',
      messages: (await import(`./messages/en.json`)).default,
    };
  }

  try {
    return {
      locale,
      messages: (await import(`./messages/${locale}.json`)).default,
    };
  } catch (error) {
    console.error('Error loading messages for locale:', locale, error);
    throw new Error(`Failed to load messages for locale ${locale}`);
  }
});
