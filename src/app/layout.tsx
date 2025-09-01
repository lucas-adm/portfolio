import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Lucas | Full Stack Dev",
  description: "Portfólio de Lucas de Moraes, desenvolvedor web.",
  icons: {
    icon: "https://devlucas.website/imgs/favicon.png"
  },
  openGraph: {
    title: "Lucas de Moraes | Full Stack Dev",
    description: "Confira meu portfólio com projetos de desenvolvimento web.",
    url: "https://devlucas.website",
    siteName: "Lucas",
    images: [
      {
        url: "https://devlucas.website/imgs/favicon.png",
        width: 256,
        height: 256,
        alt: "Portfólio de Lucas de Moraes",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas | Full Stack Dev",
    description: "Portfólio de Lucas de Moraes, desenvolvedor web.",
    images: ["https://devlucas.website/imgs/favicon.png"],
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono`}>
        {children}
      </body>
    </html>
  )
}