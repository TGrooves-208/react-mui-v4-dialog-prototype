## React Material UI V4 Table with Dialogs
This is a simple demo with static data to demonstrate how to pop open Dialogs that are triggered on a respective icon. 
The data is static so nothing is taking place aside from the following:
- Transfer
   - The MoreVert icon is clicked and displays a Dialog
   - The Dialog's main purpose is to allow the selection of user emails to allow the transferring of any projects they may own.
   - We can then `Cancel` or `Transfer` which will trigger a Toast to display the email that has been used for that action
- Delete
   - The trash icon is used to follow the same workflow as above.
   - The same `Cancel` or `Delete` actions can occur and will display a Toast that disappears after 3 seconds

The main goal was to build a simple table, and have some users in in to render in a dropdown with the button disabled until a selection is made. 
Then a toast fires off to mimic what occurs in a work application. 
 ___

 ## Accessibility
This page is fully accessible now and passes all checks. It is nothing fancy but does the trick, most importantly it lets you have something to look at when working in older versions of Material UI. 
I used AxeDeque tools which are available for free via the Chrome store [AxeDeque Website](https://www.deque.com/get-started-axe-devtools-browser-extension/) Another interesting thing that may not be known is that they are truly about accessibility and helping our community. I am formally diagnosed as Autistic with Severe ADHD and Dyslexia. I'm mentioning this because they offer scholarships if you are formally diagnosed with a learning disability or some other type of cognitive diagnosis. Have fun using it and remember that small changes truly affect those who need it the most to function on a level playing field. 

![MUI-V4 Table](https://github.com/TGrooves-208/react-mui-v4-dialog-prototype/assets/5911897/1d7bea29-a626-4cc0-b541-f2abaf3fd4eb)




<b>Note</b>
This is just a demo and can come in handy if needed. Feel free to take the code and pipe in a backend. 
Alternatively, you can use JSON Server to mock restful actions, meaning you can extend the table and add new icons to aid in that process. 
I will go ahead and create something similar to this next that uses Material UI V5 components and make that fully accessible. 

This is fully accessible but not responsive which isn't hard to accomplish just add the needed media queries to target the screen as you wish. 
Here is a helpful resource on how to accomplish implementing responsive layouts which will come in handy in the future. 
- [responsive-layouts-for-future-reference](https://m2.material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins)

Cheers ☕

