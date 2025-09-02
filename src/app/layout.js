import "./globals.css";

export const metadata = {
  title: "birdseyereview.github.io",
  description: "a bird's eye review of the latest science papers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1" />
      </head>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
