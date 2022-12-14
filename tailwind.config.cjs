/** @type {import('tailwindcss').Config} */
/**
*### Primary

- Red: hsl(1, 90%, 64%)
- Blue: hsl(219, 85%, 26%)

### Neutral

- White: hsl(0, 0%, 100%)
- Very light grayish blue: hsl(210, 60%, 98%)
- Light grayish blue 1: hsl(211, 68%, 94%)
- Light grayish blue 2: hsl(205, 33%, 90%)
- Grayish blue: hsl(219, 14%, 63%)
- Dark grayish blue: hsl(219, 12%, 42%)
- Very dark blue: hsl(224, 21%, 14%)
 */
module.exports = {
  content: ['./**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      screens: {
        'desktop': '1440px',
        'mobile': '375px',
      },
      colors: {
        primary: {
          'red': 'hsl(1, 90%, 64%)',
          'blue': 'hsl(219, 85%, 26%)',
        },
        neutral: {
          'white': 'hsl(0, 0%, 100%)',
          'very-light-grayish-blue': 'hsl(210, 60%, 98%)',
          'light-grayish-blue-1': 'hsl(211, 68%, 94%)',
          'light-grayish-blue-2': 'hsl(205, 33%, 90%)',
          'grayish-blue': 'hsl(219, 14%, 63%)',
          'dark-grayish-blue': 'hsl(219, 12%, 42%)',
          'very-dark-blue': 'hsl(224, 21%, 14%)',
        }
      }
    },
    fontFamily: {
      bodyCopy: {
        paragraph: ['Plus Jakarta Sans']
      }
    }
  },
  plugins: [],
}
