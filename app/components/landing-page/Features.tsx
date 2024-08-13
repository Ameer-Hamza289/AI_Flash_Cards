const Features = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="flex justify-center space-x-6 max-w-4xl">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-1/3">
            <h3 className="text-xl font-semibold">Analytics</h3>
            <p>Monitor the performance of your flashcards and optimize learning.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-1/3">
            <h3 className="text-xl font-semibold">Custom Forms</h3>
            <p>Create your own flashcards with our easy-to-use custom forms.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-1/3">
            <h3 className="text-xl font-semibold">User Management</h3>
            <p>Manage your account settings and preferences effortlessly.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
  