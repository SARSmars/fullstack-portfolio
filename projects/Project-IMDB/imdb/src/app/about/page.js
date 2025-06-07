export default function About() {
  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300'>
    <h1 className='text-2xl font-bold text-amber-300 mt-10'>About</h1>
    <p className='text-gray-700 dark:text-gray-300 text-center mt-4 max-w-2xl px-4'>
      This is a simple IMDB clone built with Next.js, Tailwind CSS, and the TMDB API. It allows users to search for movies, view details, and explore popular titles. The project demonstrates the use of modern web technologies and responsive design principles.
    </p>
    <p className='text-gray-700 dark:text-gray-300 text-center mt-4 max-w-2xl px-4'>
      It is designed to be a lightweight and user-friendly application, showcasing the capabilities of Next.js for server-side rendering and static site generation. The use of Tailwind CSS ensures a clean and responsive UI, while the TMDB API provides access to a vast database of movies and TV shows.

    </p>
    </div>
)
}





