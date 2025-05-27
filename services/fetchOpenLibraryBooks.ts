export type OpenLibraryBook = {
	key: string;
	title: string;
	authors?: string[];
	year?: number;
	cover?: string;
  };
  
  export const fetchOpenLibraryBooks = async (
	query: string
  ): Promise<OpenLibraryBook[]> => {
	const endpoint = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
	const response = await fetch(endpoint);
  
	if (!response.ok) {
	  throw new Error(`Open Library fetch failed: ${response.statusText}`);
	}
  
	const data = await response.json();
  
	return data.docs.slice(0, 20).map((doc: any) => ({
	  key: doc.key,
	  title: doc.title,
	  authors: doc.author_name || [],
	  year: doc.first_publish_year,
	  cover: doc.cover_i
		? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
		: "https://placehold.co/400x600?text=No+Cover",
	}));
  };
  
  export const fetchOpenLibraryBestsellers = async () => {
	const url = "https://openlibrary.org/subjects/best_sellers.json";
	const response = await fetch(url);
  
	if (!response.ok) {
	  throw new Error(`Bestsellers fetch failed: ${response.statusText}`);
	}
  
	const data = await response.json();
  
	return data.works.map((work: any) => ({
	  key: work.key,
	  title: work.title,
	  authors: work.authors?.map((a: any) => a.name),
	  cover: work.cover_id
		? `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`
		: "https://placehold.co/400x600?text=No+Cover",
	}));
  };
  