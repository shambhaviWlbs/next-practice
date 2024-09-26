import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your website description here" />
        <title>Your Website Title</title>
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`} style={{ scrollBehavior: 'smooth' }}>
        <main>{children}</main>
      </body>
    </html>
  );
}
