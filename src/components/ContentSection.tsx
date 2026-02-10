import TabInterface from './TabInterface';

export default function ContentSection() {
  return (
    <section className="w-full h-screen flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-4 xl:p-6 overflow-hidden" style={{ backgroundColor: '#f9f4ea' }}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <TabInterface />
        </div>
      </div>
    </section>
  );
}
