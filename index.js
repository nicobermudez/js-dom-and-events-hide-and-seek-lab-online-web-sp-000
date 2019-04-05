
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll(".ranked-list")

  return rankedList.forEach(function(element) {
    console.log(element.children.innerHTML)
  })

}

function deepestChild() {
  let node = document.querySelector("div#grand-node")
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node

}
