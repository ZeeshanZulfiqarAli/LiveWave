const WelcomePage = () => {
  return (
    <>
      <div class="relative min-h-screen bg-gradient-to-bl from-cyan-500 to-blue-900">
        <div class="absolute inset-0 bg-black bg-opacity-40" />

        <div class="absolute inset-0 grid place-content-center">
          <button class="border-2 px-6 py-2 rounded-md border-white bg-transparent hover:animate-bounce">
            <p class="font-bold text-white text-3xl">Enter</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
