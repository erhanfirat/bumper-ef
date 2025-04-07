export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Bumper. All rights reserved.
          </p>
          <nav className="space-x-4">
            <a
              href="/privacy"
              className="text-gray-900 dark:text-white hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-900 dark:text-white hover:underline"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
