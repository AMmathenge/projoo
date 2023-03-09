/** @type {import('./$types').PageLoad} */
export const load = async({  }) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/`);
    const posts = await res.json();
    return {
      PerformanceObserverEntryList
    };
  }