const SongUploadPage = () => {
  return (
    <>
      <div class="relative min-h-screen bg-gradient-to-bl from-cyan-500 to-blue-900">
        <div class="absolute inset-0 bg-black bg-opacity-40" />

        <div class="absolute inset-0 grid  grid-cols-2 px-6 py-6">
          <div class="flex flex-col gap-2">
            <input
              class="w-1/2 rounded-md min-h-12 px-4 py-2"
              placeholder="Username"
              type=""
            />
            <input
              class="w-1/2 rounded-md min-h-12 px-4 py-2"
              placeholder="Dropdown to choose avatar"
              type=""
            />
            <input
              class="w-1/2 rounded-md min-h-12 px-4 py-2"
              placeholder="dropdown to choose color"
              type=""
            />

            <div>
              <input type="file" />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            can display the user avatar and frame color over here
            <button class="border-2 px-6 py-2 rounded-md border-white bg-transparent hover:animate-bounce">
              <p class="font-bold text-white text-3xl">Enter</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongUploadPage;
