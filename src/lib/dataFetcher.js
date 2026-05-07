// Utility functions to fetch data from local JSON files using the native fetch() function.
// Using force-cache to ensure the data is stored/cached for performance.

const getBaseUrl = () => {
  return  "https://bookhibe-server.onrender.com";
};

export const fetchBooks = async () => {
  try {
    const url = `${getBaseUrl()}/books`;
    const response = await fetch(url, {
      cache: "force-cache", // "it would be stored" - persistent caching
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
    const url = `${getBaseUrl()}/categories`;
    const response = await fetch(url, {
      cache: "force-cache",
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
