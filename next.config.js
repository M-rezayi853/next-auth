/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: 'https://nextauth-mh77.vercel.app',
    NEXTAUTH_URL2: 'http://localhost:3000',
    EMAIL_SERVER_HOST: '',
    EMAIL_SERVER_PORT: '',
    EMAIL_SERVER_USER: '',
    EMAIL_SERVER_PASSWORD: '',
    EMAIL_FROM: '',
    MONGODB_URI:
      'mongodb+srv://m-hazara-77-1234:m-hazara-77-1234@mh77-media.ezejz.mongodb.net/next-auth?retryWrites=true&w=majority',
    GITHUB_CLIENT_ID: '938f6c594c056350dd85',
    GITHUB_CLIENT_SECRET: '677c0d6c20e706fe618185737a25cbb7fe6e36da',
    TWITTER_CLIENT_ID: '',
    TWITTER_CLIENT_SECRET: '',
    GOOGLE_CLIENT_ID:
      '697931901101-g42kdr64hj69e2ncl9s03g1qgg4itmur.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    AUTH0_CLIENT_ID: 'Gc3qmrkc3sV1Kh7SLVWp6dZ0wDRbCBXy',
    AUTH0_CLIENT_SECRET:
      'nJQogBBlTuykKB3Ju3TsvJWi7FbMVRJ1GR43kTcyO4K42hmL9Pq0LbwNoVwy3v0V',
    AUTH0_ISSUER: 'https://dev-x9z4zybt.us.auth0.com',
    FACEBOOK_CLIENT_ID: '',
    FACEBOOK_CLIENT_SECRET: '',
  },
  images: {
    domains: ['i.stack.imgur.com', 'avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
