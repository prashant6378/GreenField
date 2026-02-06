// export const asset = (path) => {
//   const base = import.meta.env.BASE_URL.replace(/\/$/, '')
//   const clean = path.startsWith('/') ? path : '/' + path
//   return `${base}${clean}`
// }

export const asset = (path) => path;



