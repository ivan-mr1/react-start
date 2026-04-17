/**
 * Универсальный прокси-обработчик для серверных функций.
 * @param {Object} req - Объект запроса
 * @param {Object} res - Объект ответа
 * @param {Object} options - Настройки прокси
 * @param {string} options.url - Конечный URL для запроса
 * @param {Object} options.config - Настройки fetch (headers, method, body)
 * @param {string} options.errorPrefix - Префикс для лога ошибки
 */
export async function sendProxyRequest(req, res, { url, config = {}, errorPrefix = 'API Error' }) {
  try {
    const response = await fetch(url, config);
    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (error) {
    console.error(`[${errorPrefix}]:`, error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
