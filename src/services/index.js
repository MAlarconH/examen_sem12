const baseURL = "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json";

export const get = async (url) => {
  try {
    const response = await fetch(`${baseURL}/${url}`);
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};