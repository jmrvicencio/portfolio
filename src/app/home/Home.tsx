const Hero = () => {
  return (
    <section className="flex w-full border border-white">
      <div className="grid w-full grid-cols-[5fr_4fr] gap-8">
        <div className="grow border">
          <div className="text-accent-400 flex gap-8 text-2xl underline">
            <div>
              <p>live site</p>
            </div>
            <div>
              <p>github repo</p>
            </div>
          </div>
          <h2 className="text-7xl font-extrabold">Keepin Tabs</h2>
          <p>A simple expense splitting app for sharing your expenses with others and Keepin’ track of your Tabs with each other.</p>
        </div>
        <div className="grow border">2</div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="font-gabarito text-white">
      <header className="font-gabarito sticky top-0 flex justify-center text-white">
        <div className="mx-6 flex w-full max-w-280 items-end justify-between py-6">
          <h1 className="text-5xl font-extrabold">
            Kyle Vicencio<span className="text-accent-400">.</span>
          </h1>
          <nav className="flex gap-12 text-xl">
            <p>About</p>
            <p>Projects</p>
            <p>
              <a href="mailto:inkintime@gmail.com">Contact</a>
            </p>
          </nav>
        </div>
      </header>
      <main className="mx-auto flex h-2000 max-w-240 justify-center">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
