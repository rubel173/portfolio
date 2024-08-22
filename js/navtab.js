$('#sort-demo').sdFilterMe({
  // options here
})
$('#sort-demo').sdFilterMe({
  filterSelector: '.sorter',
  orderSelector: '.orderer',
  duration: 1000,
  animation: 'ease',
  hoverEffect: true,
  sortedOut: 'disappear',
  css: {
      overlay: {
          background: {
              r: 0,
              v: 0,
              b: 0
          },
          duration: 250,
          border: '1px solid white',
          color: 'white',
          opacity: 0.5
      },
      border: {
          width: 10,
          color: '#2A4153'
      },
      margin: 10,
      pointer: true
  },
  nothingToShow: {
      text: 'Nothing to show'
  }
})
$('#sort-demo').sdFilterMe()
.on('fm.boxClicked', function(e, position, order) {
  console.log('Box position is ' + position);
  console.log('Box sort order is ' + order);
});