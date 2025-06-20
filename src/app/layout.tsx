import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'উত্তরপাড়া অমরেন্দ্র বিদ্যাপীঠ - পুনর্মিলন হাব (১৯৮৮ মাধ্যমিক ও ১৯৯০ উচ্চ মাধ্যমিক)',
  description: 'উত্তরপাড়া অমরেন্দ্র বিদ্যাপীঠ (১৯৮৮ মাধ্যমিক ও ১৯৯০ উচ্চ মাধ্যমিক ব্যাচ)-এর পুনর্মিলনে যোগ দিন।',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
