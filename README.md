# Metroline 

## Certain Information About The Project

**General**

I developed the page in Google Chrome on Windows 8.1. Please make sure to test it in Google Chrome as well.
I also tested it on the iPad with iOS 9.0.1 and it worked fine.

HandlebarsJS is used as template engine to compile the HTML with Grunt.

Images are taken from the internet.

**Header**

 I developed the navigation, which has the same markup from desktop to smartphone.
 The desktop version has a hover animation on the elements to display an underline decoration which stays if the element has the active state.
 From tablet portrait (`$bp-tablet-p`) I display a hamburger menu icon which toggles a flyout navigation. It works without javascript.
 
 **Stage**
 
 In a matter of time I didn't prefer to develop a whole carousel which would have been without javascript. The markup is prepared for the case though.
 There is an image as an example to show how the responsive image behavior works. There is also a css filter with a gradient and a grayscale on top of the image. It would make it easier for the designers and content managers. They wouldn't have to bother exporting images with the special filter.
 The stage also contains the wave element.
 
 **Responsive Images**
  
 There is only one example of responsive images in the project which you can find in the stage. (As I mentioned above)
 For the general setup see [Responsive Images](#responsive-images)
 
 **Animation**
 
 The animation starts on top and spreads down to the footer of the site. It's supposed to look like a track which is driven.
 It's a sequence of keyframes which are animating the border or height of the elements without the use of javascript. In the markup I used simple divs for the track and a pseudo element for the circle.
 The animation is also responsive, but is invisible on the smartphone view.
 
 **Content Sections**
 
 In the section template is the possibility to define an aside container to each section.
 It's been used in the first one to wrap the partner logos.
 For the actual content I used a component which can have a h2, paragraphs and an image.
 For the h2 headlines I used the Google Webfont "Roboto Slab".
 
 **Footer**
 
 Contact information and copyright are two different blocks.
 I choose an icon set library for the contact information icons and dyed them into the blue color. 
 

## Requirements For Frontend Development

* NodeJS (>= 0.12.0)
* Grunt

### Libsass
I use Libsass as standard SCSS compiler.

---------------------------------------------------
## Frontend Methodology

I build metroline with the Veams Frontend Methodology:
* http://veams.org/methodology/

---------------------------------------------------
## Setup

This project builds on following setup (please read requirements and getting started):

* Veams Website: http://veams.org/
* Veams Github: https://github.com/Sebastian-Fitzner/generator-veams

- I use [Grunt](http://gruntjs.com/)as our task runner
- I use [Assemble](http://assemble.io/) as our static site generator.
- I use [Git](#).
- The folder __node_modules__ won't be comitted into GIT. Use ```.gitignore``` to ignore folders or files.
- Git-commit-messages in english please.

---------------------------------------------------
## Responsive-Webdesign-Support

- Desktop
- Tablet
- Phone

### Responsive Images

If you want to use an automated task to create responsive images you need to make sure that you have installed GraphicsMagick.

To build responsive images just start the task `pictures`.

You can use `grunt-responsive-images` to build all pictures with predefined presets.
To export this data you can use `grunt-image-size-export`.


### Breakpoints
- $bp-desktop-l: new-breakpoint(min-width 1440px 12);
- $bp-tablet-p: new-breakpoint(max-width 768px 12);
- $bp-mobile-l: new-breakpoint(max-width 640px 12);
- $bp-mobile-p: new-breakpoint(max-width 480px 8);
