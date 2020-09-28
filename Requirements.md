# Challenge: Single Page Application Improvements

  

## Getting Started and GitHub Submission Link

- To start the challenge, go to this link: [https://classroom.github.com/a/8GzSE9Rx)](https://classroom.github.com/a/8GzSE9Rx)
- Link your account, clone the repository, create a new branch to work on, go into the code directory, and create your angular application using "ng new app-name"
- Start a new development branch. The master branch will be the production branch and the branch that you **SHOULD NOT** do all of your work on. Implement and do several commits on your `dev` branch. Every time you save, do a commit. Every now and then, merge the code from the `dev` to the `master` (Every time you get to a good stopping point, for this challenge you can merge after each requirement you complete). At the end, when you are finished, do the final commit to development, push up the `dev` branch,  then the final merge to master, and push up `master` branch.
    - **Note:** If you have other branches as well, which you should, essentially every feature you should have a branch, then push those up as well. You are required to have at least one additional branch, but more branches are often rewarded. 
- At the end, before the deadline, make sure you push the `dev` and `master` branch back to the origin for grading.
    - `origin` should already be set since you did a clone in the first step
    - Push up other branches you have as well 
- **If you work the entire time on master, you will get points deducted.** This is not a good industry practice.
- After pushing back to origin for the final submission, download the zip from GitHub, which will be a zip of your remote repo, on the local machine and submit that to canvas as a backup along with a link to your running instance. **The submission will require both on GitHub and Canvas**.
- **Note:** If you do not submit on GitHub Classroom then points will be deducted. In addition, if you do not submit to Canvas as a backup, then points will be deducted.
- **Note:** If you work on the master branch the entire time, points will be deducted. Create a development branch and work from there.

## Overview

In class, we looked at 3 approaches for single-page applications:

- Plain AJAX requests: [https://www.professorwergeles.com/lectures/HashingAndHistory/ajaxnav/](https://www.professorwergeles.com/lectures/HashingAndHistory/ajaxnav/)
- Hash Fragments: [https://www.professorwergeles.com/lectures/HashingAndHistory/hashnav/](https://www.professorwergeles.com/lectures/HashingAndHistory/hashnav/)
- HTML5 History API: [https://www.professorwergeles.com/lectures/HashingAndHistory/historynav/](https://www.professorwergeles.com/lectures/HashingAndHistory/historynav/)

We also discussed some of the benefits and drawbacks of each method. **Note:** Make sure you go back and read the links posted on Canvas discussing the pros/cons of each method, you will see them on quizzes and exams. 

With the HTML5 history api, we were able to create an application with sharable (bookmark-able) links, support for the browser's back and forward buttons, and clean endpoints (without a hash or hashbang). But there are still issues that need to be addressed:

- the app only works in JavaScript-enabled browsers
- it's only available if the browser supports the history api ([https://caniuse.com/#feat=history](https://caniuse.com/#feat=history))
- it doesn't update the status of the system (the `<title>` remains the same and the navigation links don't reflect the current page)
- and navigating to an endpoint directly will result in a 404.

Your challenge is to fix these issues.

## Requirements

#### Below are 6 improvements, you challenge is to take historynav and re-implement it using Angular or React while making sure to fix the improvements listed below. The 6 improvements below are the minimum improvements that can be made, there are additional improvements to implement that can be awarded as bonus. In addition, you must have everything running in HTTPS:

***Note: If you have other options besides Angular and React then let me know, I recommend you use Angular since we will be using it for several challenges throughout the semester.***

1. Update the system status: change the `<title>` to reflect the current page
2. Update the system status: give a class of "active" to the `<li>` navigation elements
    - For more info: 
        - [https://material.angular.io/components/tabs/overview](https://material.angular.io/components/tabs/overview)
        - [https://angular.io/api/router/RouterLinkActive](https://angular.io/api/router/RouterLinkActive)
3. Fix the endpoints, so that navigating to them directly does **not** cause a 404
    - If a 404 or 50x error does occur, by the user going to the wrong endpoint, then your custom 404 pages should show     
5. Implement a fully functional Angular or React application using proper programming techniques shown in class. You must use up-to-date versions of Angular or React. ***NOTE: We will be using Angular 9 in class. Avoid anything that says AngularJS, this is a completely separate thing from Angular 2+. Angular 8 documentation is also acceptable***
6. Create a fallback for browsers that are not Java-Script enabled
7. Make sure your site is a fully functional HTTPS site using SSL. Therefore, make sure users are not able to load HTTP pages, so your previous challenges should also work using HTTPS

**Note:** If you describe and make a custom improvement not listed above then there are chances for bonus points. Make sure the TAs know you implemented bonus by adding a comment on Canvas

## Required Readings

If you are having a hard time deciding between angular and react, here are a few good articles to read:

-  [https://www.freecodecamp.org/news/a-comparison-between-angular-and-react-and-their-core-languages-9de52f485a76/](https://www.freecodecamp.org/news/a-comparison-between-angular-and-react-and-their-core-languages-9de52f485a76/)
-  [https://dzone.com/articles/differences-between-react-and-angular](https://dzone.com/articles/differences-between-react-and-angular)
-  [https://www.rishabhsoft.com/blog/reactjs-vs-angularjs](https://www.rishabhsoft.com/blog/reactjs-vs-angularjs)
-  [https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176](https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176)

***Note: Remember, we will be using Angular throughout the semester. So even though I want you to read these articles so you know the difference between the two, I still recommend you to use Angular***

## What to Turn In

1. Submit your code (35 points)
2. A link to your application on Canvas (10 points)
3. Your site should be working with HTTPS and make sure users are not able to load HTTP (20 points)
4. A blurb of text explaining 6 or more improvements you made, the problems you faced, how you fixed them, knowledge and wisdom you could pass to others doing the challenge, and anything else you can think to put in the document (25 points)
            1. **The blurb must be written in markdown so we can read it on GitHub Classroom**
5. Six screenshots of your new updated pages for each of the 6 improvements listed above with the system clock in the screenshot. The system clock must have the date and time to be valid. (10 points)
    1. Some of the screenshots will be the code.
    2. Other screenshots will be the page.
    3. You can view some example screenshots here: [Challenge 3: Example Improvements](https://missouri.instructure.com/courses/23851/pages/challenge-3-example-improvements  "Challenge 3: Example Improvements")
        1. For yours, you will include a screenshot of the Angular or React code you wrote (Which is not in the example)

## Where to Submit

1. You will submit your repository to GitHub Classroom. It should contain the link and blurb in the MarkDown document, your code in a nicely formatted directory, your screenshots, and anything else we need to grade.
    - **GitHub Submision Link Listed Above**
2. As backup, you will **submit your link and zip file on Canvas**. On Canvas you can only submit a link **or** files at a time. Therefore, submit the link, then click on re-submit, and submit your repository as a zip file.

**Note:** If you do not submit on GitHub Classroom then points will be deducted. In addition, if you do not submit to Canvas as a backup, then points will be deducted.

**Note:** While you are working on the repository, you should not use the master branch, the master branch is only for the final version of the code. Make a development branch, work on the development branch, merge to master after you reach a good stopping point (after you finish a requirement), then when you are finished, you will do a final merge of the development branch back to the master branch. You can merge back to the master branch more than once, but you should implement on the development branch and get a feel for not working on the master branch to follow industry practices. Then push up `dev` and `master` and any other branches you have back to GitHub classroom (i.e. `origin`)

## Deployment

Deploying your application and submitting the code are two separate things.

**When submitting your code, make sure it is the raw code, not the code after building.** This means the code that you can view in the editor.

**Do not submit the build code on GitHub or Canvas**

The build code will be uploaded to the server and you will submit the link in the blurb (Journal) and on Canvas.

When publishing your code on the server, export the code using `ng build --prod`

Watch this YouTube video if you are not able to export or if you are getting the **white page of death**: [https://youtu.be/bv16MMPI_S4](https://youtu.be/bv16MMPI_S4)

In some cases, you may need to specify the base href to prevent the white page of death. You can run the build command like this:

>`ng build --prod --base-href /<directory/to/code>/`

The directory will not include the domain, it will only include the path in the public html directory to your code. If it were on my domain, it would look something like this

> Real Domain:
>  `https://www.professorwergeles.com/Explorations/E1/index.html`

>Command to Run:
>`ng build --prod --base-href /Explorations/E1/`

**Note:** Remember, do not submit the build code to GitHub or Canvas. The build code goes on your AWS LAMP stack and the raw code gets submitted on GitHub and Canvas for grading.

## Due Date

This challenge is due by **11:59:00pm on Friday, September 25**

## Challenge Learning Support

**Note:** You can find the source code for each app under the **Lecture 07: Hashing and History lecture. There is also a lecture on Angular in the **Lecture 08 - Intro to Angular**

If there is anything unclear about what you need to do please let me or the TAs know. If you need help, office hours are located under [CS/IT 4830 - CS7830 - Office Hours and TA Information](https://missouri.instructure.com/courses/42879/pages/cs-slash-it-4830-slash-7830-office-hours-and-ta-information?module_item_id=2199194)
