const Hero = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center"
      style={{
        backgroundImage: `url('/bgp.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
    
      <hr className="border-t-2 border-white" />

        <h1 className="text-4xl font-bold mb-4">Create, Manage, and Study Flashcards</h1>
        <p className="text-xl mb-6">Start your learning journey with our AI-powered flashcard platform.</p>
        <div className="flex justify-center w-full max-w-lg">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-3 w-full rounded-l-lg bg-gray-900 text-white"
          />
          <button className="bg-purple-500 p-3 rounded-r-lg">Generate</button>
        </div>
        {/* <p className="mt-4">Excellent ★★★★★ 4.8/5 based on 85 reviews</p> */}
      </div>
      
    );
  };
  
  export default Hero;
  