$(document).ready(function() {
  Paper.circle(x, y, r)
  var paper = Snap(400, 600);

  placeBackgroundOn(paper);

  var cloud1 = paper.path(cloudPathString(25, 60)).attr({
    fill: 'none',
    stroke: '#a0966a',
    strokeWidth: 2
  });

  var cloud2 = paper.path(cloudPathString(200, 130)).attr({
    fill: 'none',
    stroke: '#a0966a',
    strokeWidth: 2
  });

  scrollCloud(cloud1, 6000);
  scrollCloud(cloud2, 6000);
});

function scrollCloud(cloud, duration) {
  cloud.animate({ transform: 'T400,0' }, duration, null, function() {
    cloud.transform('T-400,0');
    scrollCloud(this, duration);
  })
}

function cloudPathString(stX, stY) {
  var start = ['M ', stX, ', ', stY].join('');
  return [
    start,
    'h 100',
    'a 12,7 0 0,0 -38,-10',
    'a 22,18 0 0,0 -53,10',
    'z'
  ].join('')
}

function randomShapeString() {
  return [
    'M 500,500',
    'h 30',
    'v 30',
    'h -30',
    'v -30',
    'z'
  ].join('');
}

function placeBackgroundOn(paper) {
  var bg = paper.rect(0, 0, 400, 800);
  bg.attr({
    fill: '#2e2e2e'
  });
}
