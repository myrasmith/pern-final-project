export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://rocky-shelf-18627.herokuapp.com";
};
