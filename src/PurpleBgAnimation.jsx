import './PurpleBgAnimation.css'; 

const OrangeBgAnimation = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <div 
          key={i}
          className="particle absolute w-1 h-1 bg-purple-700 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      
      {/* Glowing areas */}
      <div className="glowing-area glowing-1" />
      <div className="glowing-area glowing-2" />
      <div className="glowing-area glowing-3" />
    </div>
  );
};

export default OrangeBgAnimation;