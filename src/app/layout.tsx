import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="pt-14">{children}</main> {/* Match with navbar height */}
      </body>
    </html>
  );
}
