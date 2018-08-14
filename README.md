# kununu Frontend Test

> **Read it first:** I know... you probably love to code (We love it also!). But please... Read this file until the end and clearly understand the requirements before start coding! :) If you have any doubts related to the requirements let us know.

## Backstory

Our application was built as an MVP solution that didn’t took into consideration the possibility of having multiple cultures. Your task is to create a simple application that solves this problem. A culture is a way of targeting our application to a specific region, location or market. Each culture can have different languages associated to it and is defined by the following URL structure:

| Culture       | Languages         | URL                               |
|:-----:|:----:|:-----:|
| us            | English, Spanish  | https://example.com/us/    |
| de            | German, English   | https://example.com/de/    |

## Requirements

Build a structured application that supports multiple cultures with multiple languages.

The result of this exercise should be an application with the following requirements:
1. Application with the routes described on the table above;
2. Application has a Welcome page (/welcome) with a translated welcome message based on the selected language;
3. The welcome page should have a way of switching languages within the current culture;
4. The welcome page should be in accordance with the mocks defined on the file `en_US.png`;
5. When refreshing the page the selected language should be the last used for that culture;
6. The default language for the US culture is "en" and for the DE culture is "de".

## Technology

This is your chance to show off. Use angular to build a clearly-written application. Organize your application considering the following future developments that will be done on the next iteration of work (**not required for this exercise!**):
* Build a contacts page (/contacts) similar to the welcome page;
* Possibility to switch between local-storage and cookies;

### Must haves

1. Angular >= 2.0.0;
2. Build the interface using flexbox or CSS grid layout;
3. Use typescript;
4. Test your code! (with unit tests and/or integration tests)
5. Project is running according to the requirements specified above;
6. Add project setup steps to the README file. Ideally, it will be something like:
   * `npm install` & `npm run start`

### Nice to haves

* Use BEM methodology;
* @angular/cli and angular style guide conventions;
* Fallback for invalid cultures. Eg.: "/pt/welcome" redirects to "/us/welcome";
* Add documentation using JSDoc;

----
> **Tips**
> * Before adding logic to your structure, think on what's the responsability of it first (the use of JSDoc documentation might help);
> * We appretiate the fact that you think outside the box and add additional technical approaches that will improve your application scalability and code or add any additional cool features to the application, **but first...** Make sure you completed all the "Must haves" and ideally the "Nice to haves" first!
> * Before you contact us saying that you finished the technical challenge, take 5 minutes to clean-up your code and repo;