const render = function(element, container) {
    const newElement = document.createElement(element.type);
    for (const prop in element.props) {
        if(prop === 'children') continue;
        newElement.setAttribute(prop, element.props[prop]);
    }
    newElement.innerHTML = element.children;
    container.appendChild(newElement)
}

const mainContainer = document.querySelector('#root');

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com"
    },
    children: "click me"
}

render(reactElement, mainContainer)