import "./globals.css";

export default function RootLayout({ children, team, work }) {
  return (
    <html lang="en">
      <body className="flex justify-between">
        <div className="min-w-1/3 min-h-1/3 flex justify-center items-center bg-gray-900">
          {children}
        </div>
        <div className="min-w-1/3 min-h-1/3 flex justify-center items-center bg-gray-800">
          {team}
        </div>
        <div className="min-w-1/3 min-h-1/3 flex justify-center items-center bg-gray-700">
          {work}
        </div>
      </body>
    </html>
  );
}
