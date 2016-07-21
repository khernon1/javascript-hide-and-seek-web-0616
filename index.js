function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  // return document.getElementById('nested').querySelector('div div div div div')
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
  // return document.querySelector('#grand-node /div')
}

function increaseRankBy(n) {
  var nums = document.querySelectorAll('#app ul.ranked-list li')

    for (i = 0; i < nums.length; i++) {
        nums[i].innerHTML = (parseInt(nums[i].innerHTML) + n).toString()
    }
  return nums
}