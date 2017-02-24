module.exports = {
  prefix: 'icon-',
  svg: {
    style: 'position:absolute; width:0; height:0',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  output: [
    {
      filter: 'all',
      sprite: 'svg/sprite.svg'
    }
  ],
  min: true,
}
