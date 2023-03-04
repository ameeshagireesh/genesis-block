/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/login',
        has: [
          {
            type: 'cookie',
            key: 'refreshToken',
          },
        ],
        permanent: false,
        destination: '/',
      },
      {
        source: '/',
        missing:[
          {type:'cookie',key:'refreshToken'}
        ],
        permanent:false,
        destination:'/login'
      }
    ]
  }
}
module.exports = nextConfig
