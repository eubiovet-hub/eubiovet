import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="w-screen h-screen flex flex-col items-center justify-center relative px-4"
      style={{ backgroundColor: '#f9f4ea' }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src="/logo.jpeg"
          alt="Oryx Life Sciences Logo"
          width={600}
          height={600}
          className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto"
          priority
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 flex flex-col items-center gap-2 sm:gap-3">
        <p className="text-xs sm:text-sm text-gray-600 font-medium text-center px-4">Explore Product Information</p>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
