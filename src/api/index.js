let baseUrl = ''

process.env.NODE_ENV === 'development' ? baseUrl = '' : baseUrl = 'http://47.94.88.61:3000'

export default baseUrl