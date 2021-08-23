My initial idea was to replicate a custom pizza ordering app which has checkboxes for each topping and adjusts the price and image based on user input. I wanted to include e-commerce elements such as a cart-counter and checkout so I began to sketch out my ideas on paper which I find to be a useful first step for all of my projects.

I created a quick wireframe on Adobe XD to guide me. I designed all of my pizza graphics in Canva. I organized all of my data in arrays in separate files.

I built the Home page and had some fun playing in CSS. 'Position' is not something I always utilize so I was happy to get the practice. Throughout the project I built out the responsive versions for each element before moving on. 

The user journey begins on the Home page, from which they have two options: Our Menu or Make Your Own.

I decided to follow and build out one path at a time. I began with Our Menu. 
First, I worked on the repeating components: Header and Navbar. I discovered how to dynamically render each header based on the url of the page which was pretty awesome! I also enjoyed googling around for more info on React Router during this setup phase, during which I came across useParams which I bookmarked for later.
Next, I built FullMenu (currently still has a placeholder image). Does anyone else love using the map method in React or is that just me? It's so statisfying to type out my element once they see it perfectly repeated and displayed on my screen!

Next up was the Checkout. Here I dove into useReducer to manage states of cart items, price, amount of items, and a success modal. I decided against Redux because I don't believe my project reaches the threshold of complexity. I decided against inividually managing each state with useState because as they were all related and it was more that just a couple of state changes, it made the most sense to keep everything organized and together with useReducer.

Currently working on Custom.js Pizza Maker aka the custom pizza builder!

Deployed at: https://hardcore-tereshkova-ed717b.netlify.app/

To be continued...
