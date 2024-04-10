export default function Home() {
  return (
    <>
      {/* <header className="h-16 z-10 fixed left-0 top-0 flex w-full font-mono text-lg backdrop-blur-2xl border-b border-gray-300 bg-gradient-to-b from-zinc-200">
        <div className="flex container w-full justify-center items-center ">
          zerino.org
        </div>
      </header> */}

      <main className="container flex min-h-screen flex-col items-center justify-between">
        <div className="z-10 w-full items-center justify-end font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none">
            <a
              className="cursor-pointer flex place-items-center gap-2 p-8 lg:pointer-events-auto"
              href="https://www.linkedin.com/in/leonardo-zerino-8995a512b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              zerino development
            </a>
            <a
              className="cursor-pointer flex place-items-center gap-2 p-8 lg:pointer-events-auto"
              href="mailto:leo@zerino.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact me
            </a>
          </div>
        </div>

        <div className="h-screen relative flex place-items-center before:absolute before:h-[300px] before:w-full before:z-[-1] sm:before:w-[480px] before:rounded-full before:bg-gradient-radial before:from-[#F5E979] before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert">
            soon;em breve
          </h1>
        </div>
      </main>
    </>
  )
}
