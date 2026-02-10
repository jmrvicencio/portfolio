function Hero() {
  return(
    <section className="border-white border flex w-full">
      <div className="flex w-full gap-8">
        <div className="grow border">
          <h2>Keepin Tabs</h2>
          <p>A simple expense splitting app for sharing your expenses with others and Keepin’ track of your Tabs with each other.</p>
        </div>
        <div className="grow border">2</div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      <header className="font-gabarito text-white flex justify-center sticky top-0">
        <div className="max-w-280 flex justify-between items-end w-full py-6 mx-6">
          <h1 className="font-extrabold text-5xl">
            Kyle Vicencio<span className="text-accent-400">.</span>
          </h1>
          <nav className="flex gap-12 text-xl">
            <p>About</p>
            <p>Projects</p>
            <p><a href="mailto:inkintime@gmail.com">Contact</a></p>
          </nav>
        </div>
      </header>
      <main className="h-2000 max-w-240 mx-auto flex justify-center">
        <Hero />
      </main>
    </>
  );
}

export default Home;
