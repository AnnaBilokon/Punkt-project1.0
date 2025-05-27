import { useState } from "react";
import { Book } from "@/services/api"; // your Google Book type
import { nanoid } from "nanoid"; // or use uuid

type Bookshelf = {
  id: string;
  title: string;
  books: Book[];
};

export const useBookshelves = () => {
  const [shelves, setShelves] = useState<Bookshelf[]>([]);

  const createShelf = (title: string) => {
    const newShelf: Bookshelf = {
      id: nanoid(),
      title,
      books: [],
    };
    setShelves([...shelves, newShelf]);
  };

  const addBookToShelf = (shelfId: string, book: Book) => {
    setShelves((prev) =>
      prev.map((shelf) =>
        shelf.id === shelfId && !shelf.books.some((b) => b.id === book.id)
          ? { ...shelf, books: [...shelf.books, book] }
          : shelf
      )
    );
  };

  return { shelves, createShelf, addBookToShelf };
};
