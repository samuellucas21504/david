import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProvider from './components/theme-provider';
import { Themes } from './components/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'David',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
        <body className={inter.className}>
          <ThemeProvider
            attribute='data-theme'
            defaultTheme={Themes.dark}
            themes={[Themes.dark, Themes.light]}

          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
