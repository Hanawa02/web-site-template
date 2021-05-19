import en from './en.json'
import pt from './pt.json'

export const i18n = {
  locales: [
    {
      code: 'en',
      name: 'English'
    },
    {
      code: 'pt',
      name: 'Português'
    }
  ],
  // Warning: 'no_prefix' strategy doesn't support Custom paths and Ignore routes features.
  strategy: 'no_prefix',
  vueI18n: {
    messages: { en, pt },
    dateTimeFormats: {
      en: {
        short: {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        },
        long: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long'
        }
      },
      pt: {
        short: {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        },
        long: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long'
        }
      }
    }
  },
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    alwaysRedirect: false,
    fallbackLocale: 'en'
  }
}
