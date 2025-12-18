export function saveAuth(token: string, user: any) {
  localStorage.setItem("sommie_token", token);
  localStorage.setItem("sommie_user", JSON.stringify(user));
}

export function getToken() {
  return localStorage.getItem("sommie_token");
}

export function logout() {
  localStorage.clear();
}
