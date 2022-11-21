export function fetchMidia(id) {
  return fetch("http://localhost:8000/midias/" + id).then((res) => res.json());
}

export function updateMidia(data) {
  return fetch("http://localhost:8000/midias/" + data.id, {
    headers: {
      "Content-type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function createMidia(data) {
  return fetch("http://localhost:8000/midias", {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function findUserByEmail(email) {
  return fetch(
    "http://localhost:8000/users?" +
      new URLSearchParams({
        mail: email,
      })
  ).then((res) => res.json());
}

export function createUser(data) {
  return fetch("http://localhost:8000/users", {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function fazLogin(data) {
  return localStorage.setItem("auth", JSON.stringify(data));
}
