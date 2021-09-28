import React from 'react'

export default function SkillsFigure() {
    return (
      <div className="tabs fadeInAnimated--5">
        <input
          id="tab-1"
          type="radio"
          name="radio-set"
          className="tab-selector-1"
          defaultChecked={true}
        />
        <label htmlFor="tab-1" className="tab-label-1">
          HTML
        </label>

        <input
          id="tab-2"
          type="radio"
          name="radio-set"
          className="tab-selector-2"
        />
        <label htmlFor="tab-2" className="tab-label-2">
          CSS
        </label>

        <input
          id="tab-3"
          type="radio"
          name="radio-set"
          className="tab-selector-3"
        />
        <label htmlFor="tab-3" className="tab-label-3">
          JS
        </label>

        <input
          id="tab-4"
          type="radio"
          name="radio-set"
          className="tab-selector-4"
        />
        <label htmlFor="tab-4" className="tab-label-4">
          React
        </label>

        <input
          id="tab-5"
          type="radio"
          name="radio-set"
          className="tab-selector-5"
        />
        <label htmlFor="tab-5" className="tab-label-5">
          Node
        </label>

        <input
          id="tab-6"
          type="radio"
          name="radio-set"
          className="tab-selector-6"
        />
        <label htmlFor="tab-6" className="tab-label-5">
          Redux
        </label>

        {/* <div className="clear-shadow"></div> */}

        <div className="content">
          <div className="content-1">
            <p>
              HTML, or Hypertext Markup Language, is used to organize an application. 
              Through the use of various tags - such as header, div, nav, and ul - a programmer 
              is able to write clean, syntactic code that is highly logical and easy to follow. 
              Of course, this is only truly capable when a programmer has memorized the different 
              use cases of the various tags. 
            </p>
            <p>
              Throughout my various projects, you will find HTML implemented through both standard 
              syntax and in JSX. By developing a strong understanding of the markup, I have been able 
              to make my projects easier to read and follow so that I am able to easily decipher what 
              is going on in a file I haven’t looked at in a while. It has also allowed me to organize 
              my work into code that sometimes has a variety of complex logic. Overall, HTML has allowed 
              me to write code in a way that both I and other programmers can easily read and understand.
            </p>
          </div>
          <div className="content-2">
            <p>
              CSS, or Cascading Style Sheets, is used to format an application. This ranges from relative 
              placement of divisions, colors, spacing, sizing; without it, our applications would simply 
              be a bore to look at. While mastering CSS takes incredible dedication and practice, there 
              is much that can be done by having a strong understanding of the fundamentals, such as the 
              box model. Through different forms of implementation, I have been able to develop beautiful 
              web applications by simply writing CSS code. From animations on user events to cohesive color 
              choices to make a more enjoyable UX experience, I have effectively implemented CSS into all 
              of my applications. I have also taught myself to use SASS, or Syntactically Awesome Style Sheets, 
              to write more organized CSS code. I have found that the use of SASS has made my projects easier 
              to scale and manipulate, especially through the use of variables and the 7-1 directory pattern.
            </p>
          </div>
          <div className="content-3">
            <p>
              Although there are some nuance annoyances, the JavaScript language has a significant advantage 
              over other scripting languages: it allows for the development of applications on both the front and back end.
            </p>
            <p>
              In order to build full stack applications, I have taken the necessary steps to become an efficient 
              programmer in JavaScript. Through the many built in methods, I have built fast, simple, and clean 
              applications with clear and easy to follow logic. In addition, I am able to solve relatively complex 
              algorithm problems using the language, most notably when taking into account the time and space complexity 
              of various solutions. JavaScript has allowed my full-stack applications to run seamlessly, and I have found 
              that the ability to write both the client side and back end in the same language has led to a significant 
              advantage, as I can easily make the entire stack readable to both myself and other programmers.
            </p>
          </div>
          <div className="content-4">
            <p>
              In order to build fast, scalable and intuitive applications, I chose to build my stacks using 
              the React framework. While many programmers choose to use the Angular framework, I have found 
              React to be the better alternative, especially due to its modern day use of components and ease 
              of use with APIs. In addition, I have found the integration of HTML and CSS into React components 
              through JSX to be incredibly powerful, easy to use, and logical, as I can organize my code and 
              keep logic wherever I find most rational.
            </p>
            <p>
              Through the use of React, I have been able to build highly organized and intuitive applications. 
              By developing my own custom hooks, I have been able to make my components not only highly scalable, 
              but also reusable to build other projects rapidly with a uniform thought process. Furthermore, I 
              have built many applications using the built in hooks that come with React. From using useEffect 
              to create timers and delays, to useState to deal with component based state, my projects effectively 
              make use of the framework to its full capacity.
            </p>
          </div>
          <div className="content-5">
            <p>
              To build the backend of my projects using a uniform language throughout my stack, I chose to use Node.js. 
              As a single-threaded, event-driven JavaScript runtime, Node.js has allowed me to write highly-scalable and 
              fast code. This is all done by understanding how the event loop executes code asynchronously to handle new 
              connections and operations in a non-blocking way. This approach allows Node.js to use less memory than its 
              counterparts. In addition, I have found that the conventional use of routes, controllers, and middleware 
              has allowed for a logical and scalable directory system. 
            </p>
            <p>
              Through the use of the Express.js framework, I have incorporated Node.js as my backend environment for my 
              fullstack applications. It has allowed me to write intuitive backend code to handle API calls, interact with 
              databases, and communicate with clients through the integration of Nodemailer for emails and Mailchimp for 
              community newsletters. I have also learned to use the JavaScript runtime to handle authentication through JSON 
              web tokens to allow for a user / client environment. 
            </p>
          </div>
          <div className="content-6">
            <p>
              To further make my stack scalable and organized, I have implemented Redux into my applications. The library 
              has allowed the client side of my projects to store state changes in a single location which, as projects 
              grow larger in size, has led to ease of state management across the component tree. While the store holds 
              the tree’s state, the actions describe what happens to the application when they are called upon by reducer 
              functions. Although many components still have their own state for localized logic, the implementation of 
              Redux to hold state has made my projects cleaner, as there is no need to keep track of passing logic up and 
              down components and worry about the connectivity of the overall tree.
            </p>
            <p>
              Throughout all of my full stack applications, I have made use of the power of Redux to handle my stack-wide 
              state. From handling interactions with databases on the client side, to holding logic on whether a modal is 
              open or not, I have found the use of Redux has made my applications rational and easily scalable.
            </p>
          </div>
        </div>
      </div>
    );
}

