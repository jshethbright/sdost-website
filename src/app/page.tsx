import Image from "next/image";
import "./globals.css"
export default function Home() {
  return (
    <main className="bg-blue-bell-500">
      <section className="relative min-h-screen">
        <nav className="absolute top-0 left-0 w-full p-10 flex justify-between items-center bg-transparent z-20">
          <h1 className="text-xl text-white">Orchestral Soundtracks @ San Diego</h1>
          <ul className="flex items-center space-x-6">
            <li className="inline-block">
              <a href="#" className="naventry">
                <span className="link-underline">Home</span>
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="naventry">
                <span className="link-underline">About</span>
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="naventry">
                <span className="link-underline">Contact</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="relative h-screen text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTYxNzMwNjB8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">I don't know</h1>
            <p className="text-lg text-white mb-8">Discover amazing features and services that await you.</p>
            <a href="#" className="bg-quicksand-400 text-gray-900 hover:bg-quicksand-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">About Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
