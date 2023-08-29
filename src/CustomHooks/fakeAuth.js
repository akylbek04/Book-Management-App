export const fakeAuth = async () => {
    const url = `https://reqres.in/api/login`;

    const user = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const { newToken } = await res.json();

    return newToken
}