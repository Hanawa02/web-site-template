const colors = {
  primary: '#0069d1',
  'primary-contrast': '#fff',
  'primary-dark': '#004cc0',
  'primary-dark-contrast': '#fff',
  'primary-light': '#b3d2f1',
  'primary-light-contrast': '##00366B',
  accent: '#496683',
  'accent-contrast': '#fff',
  'accent-dark': '#3b5268',
  'accent-dark-contrast': '#fff',
  'accent-light': '#7c99b6',
  'accent-light-contrast': '##001F42'
}

module.exports = {
  theme: {
    colors: colors,
    fontFamily: {},
    extend: {
      boxShadow: {
        'card-card-primary': `0px 0px 5px 0px ${colors.primary}`,
        'card-primary-dark': `0px 0px 5px 0px ${colors['primary-dark']}`,
        'card-primary-light': `0px 0px 5px 0px ${colors['primary-light']}`,
        'card-primary-light-contrast': `0px 0px 5px 0px ${colors['primary-light-contrast']}`,
        'card-accent': `0px 0px 5px 0px ${colors.accent}`,
        'card-accent-dark': `0px 0px 5px 0px ${colors['accent-dark']}`,
        'card-accent-light': `0px 0px 5px 0px ${colors['accent-light']}`,
        'card-accent-light-contrast': `0px 0px 5px 0px ${colors['accent-light-contrast']}`
      },
      width: {
        '45-p': '45%'
      },
      minHeight: {
        80: '20rem'
      }
    }
  },
  variants: {
    extend: {}
  }
}
