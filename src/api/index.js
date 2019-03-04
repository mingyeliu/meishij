let baseUrl = '/daxun'

process.env.NODE_ENV === 'development' ? baseUrl = '' : baseUrl = 'https://www.daxunxun.com'

export default baseUrl