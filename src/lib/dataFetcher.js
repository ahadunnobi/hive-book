// Utility functions to fetch data from local JSON files asynchronously
// In a real application, these would be API calls.

export const fetchBooks = async () => {
  // Simulating an asynchronous data fetch
  return new Promise((resolve) => {
    // We import the data dynamically or just return the imported data
    // to simulate the async nature of a database or API call.
    import("../../public/data.json").then((data) => {
      resolve(data.default);
    });
  });
};

export const fetchCategories = async () => {
  return new Promise((resolve) => {
    import("../../public/catagory.json").then((data) => {
      resolve(data.default);
    });
  });
};
