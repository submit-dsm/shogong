export const getStorage = () => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("accessToken");
  }
};
