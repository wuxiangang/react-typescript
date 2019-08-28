const isProd = !(process.env.NODE_ENV === 'development')

export default {
  server: `./server/${isProd ? 'server' : 'server-dev'}`,
  isProd
}