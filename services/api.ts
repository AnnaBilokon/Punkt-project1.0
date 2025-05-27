export const GOOGLE_BOOKS_CONFIG = {
	BASE_URL: "https://www.googleapis.com/books/v1",
	API_KEY: process.env.EXPO_PUBLIC_BOOK_API_KEY, 
  };
  
  export interface Book {
	id: string;
	volumeInfo: {
	  title: string;
	  authors?: string[];
	  imageLinks?: {
		thumbnail: string;
	  };
	  description?: string;
	  averageRating?: number;
	  publishedDate?: string;
	};
  };
  
  export const fetchBooks = async ({
	query,
  }: {
	query: string;
  }): Promise<Book[]> => {
	const API_KEY = process.env.EXPO_PUBLIC_BOOK_API_KEY;
  
	const endpoint = query
	  ? `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`
	  : `https://www.googleapis.com/books/v1/volumes?q=bestsellers&orderBy=newest&maxResults=20&key=${API_KEY}`;
  
	const response = await fetch(endpoint);
  
	if (!response.ok) {
	  throw new Error(`Failed to fetch books: ${response.statusText}`);
	}
  
	const data = await response.json();
	return data.items || [];
  };
  
  export const fetchHighlyRatedBooks = async (query: string = "bestsellers") => {
	const API_KEY = process.env.EXPO_PUBLIC_BOOK_API_KEY;
  
	const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
	  query
	)}&maxResults=40&key=${API_KEY}`;
  
	const response = await fetch(endpoint);
  
	if (!response.ok) {
	  throw new Error(`Google Books fetch failed: ${response.statusText}`);
	}
  
	const data = await response.json();
  
	const filteredBooks = (data.items || []).filter(
	  (book: any) => book.volumeInfo?.averageRating >= 4
	);
	console.log("Filtered books:", filteredBooks);
	return filteredBooks;
  };
  