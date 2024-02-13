const FSW_BE_URL = import.meta.env['VITE_FSW_BE_URL'];
const JAVA_BE_URL = import.meta.env['VITE_JAVA_BE_URL'];

export async function httpFetch<TResponse>(
  path: string,
  withToken: boolean = false,
  searchParams?: Record<string, unknown>,
  server: string = 'fsw',
  options?: RequestInit,
): Promise<TResponse> {
  const url = server === 'fsw' ? new URL(`${FSW_BE_URL}/${path}`) : new URL(`${JAVA_BE_URL}/${path}`);
  for (const key in searchParams) {
    url.searchParams.append(key, String(searchParams[key]));
  }

  const headers: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  if (withToken) {
    const token = window.localStorage.getItem('token');
    if (!token) throw new Error('Auth token not found!');
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    headers,
    ...options,
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw new Error(await res.json());
  }
}

export async function httpFetchMultipart<TResponse>(
  path: string,
  withToken: boolean = false,
  searchParams?: Record<string, unknown>,
  server: string = 'fsw',
  options?: RequestInit,
): Promise<TResponse> {
  const url = server === 'fsw' ? new URL(`${FSW_BE_URL}/${path}`) : new URL(`${JAVA_BE_URL}/${path}`);
  for (const key in searchParams) {
    url.searchParams.append(key, String(searchParams[key]));
  }

  const headers: HeadersInit = {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  if (withToken) {
    const token = window.localStorage.getItem('token');
    if (!token) throw new Error('Auth token not found!');
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    headers,
    ...options,
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw new Error(await res.json());
  }
}
