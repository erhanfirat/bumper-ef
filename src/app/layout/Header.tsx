import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/vercel.svg" alt="Logo" className="h-8 w-8 mr-2" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Bumper
            </h1>
          </div>
          <div className="flex items-center">
            <nav className="flex space-x-4">
              <Link
                href="/"
                className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium border-b-2 border-blue-500"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/register"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Kayıt Ol
              </Link>
              <Link
                href="/partnerList"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                İş Ortakları
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
