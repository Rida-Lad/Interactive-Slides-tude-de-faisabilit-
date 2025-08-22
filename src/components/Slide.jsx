const Slide = ({ title, subtitle, content, index }) => {
  return (
    <div className="w-full h-screen flex-shrink-0 relative">
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 z-10">
        <div className="max-w-3xl backdrop-blur-sm p-10 rounded-2xl shadow-2xl transform transition-all duration-700 ease-out"
             style={{
               opacity: 1,
               transform: 'translateY(0)'
             }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent ">
            {subtitle}
          </h2>
          <div className="mt-6">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;