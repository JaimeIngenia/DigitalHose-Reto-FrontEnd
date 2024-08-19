export async function httpPost<T>(
  url: string,
  body: any,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: JSON.stringify(body),
    ...options,
  });

  if (!response.ok) {
    throw new Error("Error en la solicitud");
  }

  return response.json();
}
