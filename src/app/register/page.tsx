import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kayıt Ol",
  description: "Yeni kullanıcı kaydı oluşturun",
};

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        Register
      </div>
    </div>
  );
}
