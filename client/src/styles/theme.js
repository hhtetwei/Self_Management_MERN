import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

/**
 * @type {import("@mantine/core").MantineThemeOverride} theme
 */
export const theme = {
  fontFamily: poppins.style.fontFamily,
  colorScheme: 'light',
  colors: {
    brand: ['#b6de9e', '#99d17a', '#7CC353', '#58B13B'],
    brandGray: ['#E6E9EF'],
  },
  primaryColor: 'brand',
  primaryShade: 2,
  globalStyles: (theme) => ({
    body: {
      backgroundColor: theme.colors.gray[0],
    },
    '#__next': {
      minHeight: '100vh',
      backgroundColor: theme.colors.brandGray,
    },
  }),
  components: {
    Divider: {
      defaultProps: {
        my: 'md',
        color: 'gray.2',
      },
    },
    Tabs: {
      styles: (theme) => ({
        tab: {
          '&[data-active]': {
            color: theme.colors.brand,
          },
          borderBottomWidth: 4,
          fontWeight: 'bolder',
          // For some reason, if we use padding, border breaks.
          lineHeight: 2.5,
        },
      }),
    },
  },
};
