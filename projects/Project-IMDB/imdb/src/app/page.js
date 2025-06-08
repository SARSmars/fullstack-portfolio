import React from 'react';
import Results from '@/components/Results';

const API_KEY =  process.env.API_KEY;
export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending';  
  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTrending" ? "trending/movie/week" : "movie/top_rated" }?language=en-US&api_key=${API_KEY}`, {
    next: { revalidate: 10000 },
    // Fetching data from the API with a revalidation time of 10 second
  });
 
  const data = await res.json();
  const result  = data.results;
  console.log(result);
 if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return (
    <div>
      <Results results={result} />
      {/* Passing the results to the Results component */}
    </div>
  );
}
