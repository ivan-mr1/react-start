import { sendProxyRequest } from './_lib/proxy.js';

export default async function handler(req, res) {
  const { q } = req.query;
  const API_KEY = process.env.REMOTE_CONTENT_API_KEY;
  const BASE_URL = process.env.REMOTE_CONTENT_API_URL;

  if (!API_KEY || !BASE_URL) {
    return res.status(500).json({ error: 'Server setup error' });
  }

  const params = new URLSearchParams({
    api_key: API_KEY,
    query: q || '',
    language: 'ru-RU',
  });

  return sendProxyRequest(req, res, {
    url: `${BASE_URL}/3/search/movie?${params}`,
    errorPrefix: 'API Search Error',
  });
}
