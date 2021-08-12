function scrollTo(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect();
  console.log(targetPosition);
}

scrollTo(".home-page", 1000);
