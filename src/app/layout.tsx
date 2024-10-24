import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Satish Gaud',
  description: 'This is my portfolio made by Next.JS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/logo.png' sizes='any' />
      </head>
      <body className={inter.className}>
        <div className='w-full h-screen'>
          <ThemeProvider disableTransitionOnChange attribute='class'>
            <div className='relative flex flex-col items-center max-w-[1800px] mx-auto'>
              {children}
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
