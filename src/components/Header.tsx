import Image from 'next/image';

export default function Header() {
  return (
    <header
      className="border-b border-gray-200 shadow-sm"
      style={{ backgroundColor: '#f9f4ea' }}
    >
      <div className="max-w-4xl mx-auto px-4 py-8 flex justify-center">
        <div className="transition-transform hover:scale-105">
          <Image
            src="/WhatsApp Image 2026-02-09 at 14.21.19.jpeg"
            alt="Oryx Life Sciences Logo"
            width={280}
            height={280}
            className="rounded-lg"
          />
        </div>
      </div>
    </header>
  );
}
