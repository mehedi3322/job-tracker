getElementById selects a single element by its unique ID, while getElementsByClassName returns a live collection of elements with the same class. querySelector selects the first matching CSS selector, and querySelectorAll returns all matches as a static NodeList.
A new DOM element is created using document.createElement(), content or attributes are added, and then it is inserted using methods like appendChild() or append().
Event Bubbling is when an event starts from the target element and propagates upward its parent elements. It continues until it reaches the document unless stopped.
Event Delegation is attaching one event listener to a parent to handle events from its children using bubbling. It improves performance and works well for dynamically added elements.
preventDefault() stops the browsers default action for an event, while stopPropagation() stops the event from moving up the DOM. They control different aspects of event handling.
