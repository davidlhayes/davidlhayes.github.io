# Choose Your adventure v1.0
## A Project by David Hayes
## General Assembly Web Development Immersive
### Chicago Cohort #2 - July 17, 2015

### Project #1 - (5 day project)

This is a demostration website promoting an imaginary business, named Choose Your Adventure.

![Screen Shot](http://www.davidhayescreative.com/adventure/assets/images/screen.png)

This Monday to Friday project required at least one page, one Ajax call, media queries to handle at least two breakpoints. Bonus targets included jQuery animation, multiple pages, and use of Sass.

The website offers fantasy adventures, so the landing page is meant to pique curiosity and give just a hint of what an adventure might be like. Users are presented with a rotating cube. The face of the cube that is clicked determines which adventure description fades into view on one side of the page or the other.

The nature of the business offering limits the amount of content that will be shown.

Additional pages are FAQ and Legal.

Technologies used:

* HTML5
* CSS3
* Sass
* JavaScript
* jQuery
* Ajax

The Ajax call is employed in the handling of the contact form. A remote server sends e-mail to the address provided on the form when the submit button is clicked.

Responsive design is employed. At a very narrow screen width, the cube is replaced with an array of buttons. Adventure pictures and descriptions appear below the buttons.

One particular challenge of this project was to present a variety of information in the same space, space would fade in and out. An image was associate with a description and a face on the rotating cube that is the centerpiece of landing page. Each adventure name was defined as an object containing the image file name and the adventure description text.

The rotating cube uses a plugin. It's supplied mages were swapped out and the presented cube was reduced to a more appropriate size. The contact form was based on a class example. The remaining code is original to this project.

![Screen Shot](http://www.davidhayescreative.com/adventure/assets/images/screencode.png)

#Version 2.0 wish list

* forms that float on top of the page, rather than slide it away
* more animation with menus and such
* more developed style, suggesting that "Choose Your Adventure" is some sort of steampunk wish mechanism
* A more complete registration process
* Social media icon menu
