export const setStorage = (accessToken: string) => {
  if (typeof window !== "undefined") {
    return sessionStorage.setItem("accessToken", accessToken);
  }
};
