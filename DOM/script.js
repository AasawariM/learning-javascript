// what is DOM ??
// what is DOM Manipulation ??
// making javascript interact with webpage = DOM Manipulation

// DOM stands for Document Object Model
// it is basically a strctured representation of HTML documents.
// Allow Javascript to access html elements and styles in order to manipulate them.
// example
// we will be able to change text,to change html attributes and also to change css styles from our javascript.

// so we can say that DOM is basically a connection point between HTML documents and javascript code.

// DOM is automatically created by the browser as soon as HTML page loads.
// and its stored in a tree like structure.
// in this tree, each HTML element is one object.

// we have a DOM tree for each HTML document.
// for each HTML element in the HTML document , we have one element node in DOM Tree
// and we can access and interact with these nodes using javascript.

// DOM always start with the document object,right at the very top.
// and document is the special object that have access to in javascript.
// this object serves as an entry point into the DOM.
// remember we did document.querySelector() so that means the querySelector method
// is available on the document object.
// i.e why we say document object is entry point to the DOM.
// bcz we need it to start selecting elements.


// first child element of document is usually the HTML element bcz HTML element is the root element in all HTML documents.
// next , html usually has 2 child elements head and body.
// in html both are adjucent elements and so they are siblings in our DOM as well.
// in deeper nested HTML strcture we keep adding more and more children to the DOM tree.

// DOM Tree has more than just element nodes,it also has nodes for all the text,comments and other stuff.
// bcz rule is,

// WHATERVER IS IN THE HTML DOCUMENT ALSO HAS TO BE IN THE DOM.

// *********** Note That ***********
// The DOM and all the Methods and Properties used for DOM Manipulation such as document.querySelector() and
// other stuff are NOT PART OF Javascript.
// DOM and DOM Methods are part of WEB APIs.
// WEB APIs are like libraries that browsers implement and that we can access from our javascript code.
// API = Application Programming interface.

// WEB APIs are also written in javascript and are automatically available for us to use.
// There is an official DOM Specification that browsers implement,which is the reason why DOM
// Manipulation works the same in all browsers.
// along with DOM there are many more WEB APIs such as Timers,Fetch API,etc.


//using javascript in browser === to manipulate the webpages that are acutally
// displayed and rendered in browser.

