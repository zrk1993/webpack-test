module.exports = function rawLoader(source) {

  let { query, request } = this
  console.log('kun-loader')

  //console.log(source)
  console.log(query)
  console.log(request)

  return `var a = 12123; module.exports = 'from kun loader' + a`
}
