const PartyPage = () => {
  return (
    <div class="min-h-screen bg-gradient-to-bl from-cyan-400 to-blue-900 px-12 py-6">
      <h3 class="font-bold text-3xl text-white">It's Party Time!</h3>

      <div class="my-4" />

      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 grid-rows-5">
          {/* RECORD PLAYER HERE */}
          <div class="row-span-3">
            <img src="/images/player.png" alt="player" />
          </div>

          <div class="my-2" />

          <div class="row-span-1 bg-slate-800 rounded-lg px-4 py-2 text-xl text-white font-bold">
            Now Playing.... Never Gonna Give You Up
          </div>

          <div class="my-2" />

          <div class="row-span-1">
            <div class="flex justify-between text-8xl">
              <span class="cursor-pointer hover:scale-105">😀</span>
              <span class="cursor-pointer hover:scale-105">😡</span>
              <span class="cursor-pointer hover:scale-105">😥 </span>
              <span class="cursor-pointer hover:scale-105">🔥</span>
              <span class="cursor-pointer hover:scale-105">❤️</span>
            </div>
          </div>
        </div>

        <div class="col-span-1 flex flex-col bg-slate-800 rounded-lg px-4 py-2">
          <h3 class="font-bold text-3xl text-white">Chat</h3>
          <div class=" flex-grow">Chat Section</div>
        </div>
      </div>
    </div>
  );
};

export default PartyPage;
