module.exports = class MYPlugin {
  apply (compiler) {
    //console.log(compiler)

    compiler.hooks.shouldEmit.tap('MyPlugin', (compilation) => {
      // return true to emit the output, otherwise false
      return true;
    });

    compiler.hooks.compile.tap('entry-option', () => {
      console.log('entry-option')
    })
    compiler.hooks.compile.tap('compile', () => {
      console.log('compile')
    })
    compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
      console.log('compilation')
      compilation.hooks.buildModule.tap(
        'MyPlugin',
        (module) => {
          module.useSourceMap = true;
          console.log('module')
          console.log(module.rawRequest)
          console.log(module._source)
        }
      );
    })
    compiler.hooks.compile.tap('make', () => {
      console.log('make')
    })
    compiler.hooks.compile.tap('after-compile', () => {
      console.log('after-compile')
    })
    compiler.hooks.compile.tap('emit', () => {
      console.log('emit')
    })
    compiler.hooks.compile.tap('done', (stats) => {
      console.log('done')
      // console.log(stats)
    })
  }
}