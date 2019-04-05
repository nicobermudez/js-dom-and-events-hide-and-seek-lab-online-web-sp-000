
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll(".ranked-list")

  for(let i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children
  }

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
