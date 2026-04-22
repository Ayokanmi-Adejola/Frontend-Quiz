export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface QuizSubject {
  subject: string;
  questions: Question[];
}

export const quizData: QuizSubject[] = [
  {
    subject: "HTML",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Trainer Marking Language",
          "Hyper Text Marketing Language",
          "Hyper Text Markup Language",
          "Hyper Text Markup Leveler",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question: "Which of the following is the correct structure for an HTML document?",
        options: [
          "<html><head></head><body></body></html>",
          "<head><html></html><body></body></head>",
          "<body><head></head><html></html></body>",
          "<html><body></body><head></head></html>",
        ],
        answer: "<html><head></head><body></body></html>",
      },
      {
        question: "Which HTML element is used to define the title of a document?",
        options: ["<head>", "<title>", "<header>", "<top>"],
        answer: "<title>",
      },
      {
        question: "What is the purpose of the <alt> attribute in an <img> tag?",
        options: [
          "To set the alignment of an image",
          "To provide alternative text for an image",
          "To adjust the size of an image",
          "To add a border to an image",
        ],
        answer: "To provide alternative text for an image",
      },
      {
        question: "Which HTML tag is used to create an unordered list?",
        options: ["<ol>", "<li>", "<ul>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "What does the <a> tag in HTML stand for?",
        options: ["Attachment", "Anchor", "Applet", "Article"],
        answer: "Anchor",
      },
      {
        question: "Which HTML element is used for the largest heading?",
        options: ["<h6>", "<head>", "<heading>", "<h1>"],
        answer: "<h1>",
      },
      {
        question: "In HTML, which attribute is used to specify a unique identifier for an element?",
        options: ["class", "id", "name", "key"],
        answer: "id",
      },
      {
        question: "Which HTML element is used to define emphasized text?",
        options: ["<strong>", "<em>", "<i>", "<b>"],
        answer: "<em>",
      },
      {
        question: "In HTML, what does the <br> tag do?",
        options: [
          "Creates a bold text",
          "Inserts a line break",
          "Adds a border",
          "Creates a new paragraph",
        ],
        answer: "Inserts a line break",
      },
    ],
  },
  {
    subject: "CSS",
    questions: [
      {
        question: "What does CSS stand for?",
        options: [
          "Colorful Style Sheets",
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question: "Which property is used to change the background color in CSS?",
        options: ["bgcolor", "color", "background-color", "background"],
        answer: "background-color",
      },
      {
        question: "How do you select an element with id 'header' in CSS?",
        options: [".header", "#header", "header", "*header"],
        answer: "#header",
      },
      {
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "text-style", "font-family", "typeface"],
        answer: "font-family",
      },
      {
        question: "What is the default value of the position property?",
        options: ["relative", "fixed", "absolute", "static"],
        answer: "static",
      },
      {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size",
      },
      {
        question: "What does the 'z-index' property in CSS control?",
        options: [
          "The zoom level of an element",
          "The stacking order of elements",
          "The size of an element",
          "The spacing between elements",
        ],
        answer: "The stacking order of elements",
      },
      {
        question: "Which CSS property is used to create space between the element's border and content?",
        options: ["margin", "padding", "border-spacing", "gap"],
        answer: "padding",
      },
      {
        question: "What is the purpose of the 'box-sizing' property in CSS?",
        options: [
          "To set the size of a box shadow",
          "To control how the total width and height of an element is calculated",
          "To adjust the box model of an element",
          "To set the border style of an element",
        ],
        answer: "To control how the total width and height of an element is calculated",
      },
      {
        question: "Which CSS property is used to make text bold?",
        options: ["text-weight", "font-style", "font-weight", "bold"],
        answer: "font-weight",
      },
    ],
  },
  {
    subject: "JavaScript",
    questions: [
      {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Object"],
        answer: "Float",
      },
      {
        question: "What does 'DOM' stand for in web development?",
        options: [
          "Document Object Model",
          "Data Object Management",
          "Digital Ordinance Model",
          "Desktop Object Model",
        ],
        answer: "Document Object Model",
      },
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "What does the '===' operator do in JavaScript?",
        options: [
          "Assigns a value to a variable",
          "Compares values without considering type",
          "Compares both value and type",
          "Checks if a variable is undefined",
        ],
        answer: "Compares both value and type",
      },
      {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        options: ["append()", "concat()", "attach()", "merge()"],
        answer: "concat()",
      },
      {
        question: "What is the output of typeof null in JavaScript?",
        options: ["null", "undefined", "object", "number"],
        answer: "object",
      },
      {
        question: "Which method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()",
      },
      {
        question: "What is a closure in JavaScript?",
        options: [
          "A function without a return value",
          "A function that has access to variables in its outer scope",
          "A built-in JavaScript method",
          "An HTML element",
        ],
        answer: "A function that has access to variables in its outer scope",
      },
      {
        question: "Which statement is used to handle exceptions in JavaScript?",
        options: ["if-else", "for-in", "try-catch", "switch-case"],
        answer: "try-catch",
      },
      {
        question: "What does 'NaN' stand for in JavaScript?",
        options: [
          "Not a Number",
          "Not a Null",
          "Null and Number",
          "None of the above",
        ],
        answer: "Not a Number",
      },
    ],
  },
  {
    subject: "Accessibility",
    questions: [
      {
        question: "What does 'WCAG' stand for?",
        options: [
          "Web Content Accessibility Guidelines",
          "Web Compliance Accessibility Guide",
          "Web Content Accessible Graphics",
          "Website Compliance and Accessibility Goals",
        ],
        answer: "Web Content Accessibility Guidelines",
      },
      {
        question: "Which element is used to provide alternative text for images in web pages?",
        options: [
          "The title attribute",
          "The alt attribute on the img element",
          "The figcaption element",
          "The description element",
        ],
        answer: "The alt attribute on the img element",
      },
      {
        question: "What is the purpose of the 'aria-label' attribute?",
        options: [
          "To define a label for a form input",
          "To provide an accessible name for an element",
          "To add a tooltip to an element",
          "To define the language of the content",
        ],
        answer: "To provide an accessible name for an element",
      },
      {
        question: "Which of the following is NOT a principle of the WCAG?",
        options: ["Perceivable", "Dependable", "Operable", "Understandable"],
        answer: "Dependable",
      },
      {
        question: "What is the minimum recommended color contrast ratio for normal text?",
        options: ["3:1", "4.5:1", "7:1", "2:1"],
        answer: "4.5:1",
      },
      {
        question: "Which HTML attribute is used to define a keyboard shortcut for an element?",
        options: ["tabindex", "accesskey", "shortcut", "keypress"],
        answer: "accesskey",
      },
      {
        question: "What does ARIA stand for?",
        options: [
          "Accessible Rich Internet Applications",
          "Advanced Responsive Internet Assistance",
          "Accessible Responsive Internet Applications",
          "Automated Rich Internet Access",
        ],
        answer: "Accessible Rich Internet Applications",
      },
      {
        question: "Which of the following is essential for making a website keyboard accessible?",
        options: [
          "Using only mouse-based events",
          "Providing visible focus indicators",
          "Removing all interactive elements",
          "Using high-resolution images",
        ],
        answer: "Providing visible focus indicators",
      },
      {
        question: "What is the role of a 'skip navigation' link?",
        options: [
          "To bypass repetitive content and jump to the main content",
          "To skip to the next page",
          "To navigate back to the homepage",
          "To skip over images on a page",
        ],
        answer: "To bypass repetitive content and jump to the main content",
      },
      {
        question: "Which of the following best describes the purpose of semantic HTML?",
        options: [
          "To make the website look visually appealing",
          "To improve search engine optimization only",
          "To provide meaningful structure that aids accessibility",
          "To speed up page loading times",
        ],
        answer: "To provide meaningful structure that aids accessibility",
      },
    ],
  },
]
