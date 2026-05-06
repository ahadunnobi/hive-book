// Utility functions to fetch data from local JSON files using the native fetch() function.
// This mimics fetching data from an external API endpoint.

const BASE_URL = "http://localhost:3000" || "https://hive-book.vercel.app";

export const fetchBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/data.json`, {
      cache: "no-store", // Ensure we get fresh data
    });
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/catagory.json`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
