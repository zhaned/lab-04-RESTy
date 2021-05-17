export const fetchJson = async ({method, url, body}) => {
  if (method === GET){
    const response = await fetch(url);
    const json = await response.json();

    return json;
  } else {
    const response = await fetch(url, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      }
    });
    const json = await response.json();

    return json;
  }
}