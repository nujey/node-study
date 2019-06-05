type EventNames = 'click' | 'scroll' | 'mousemove'

function handleEvent(ele: Element, event: EventNames) {
  // dosomething
}

handleEvent(document.getElementById('hello'), 'scroll')
handleEvent(document.getElementById('world'), 'dbclick')
