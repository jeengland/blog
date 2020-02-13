//----------------------- Code to turn dates red on mouse hover ---------------------
const postDates = document.querySelectorAll('time');

postDates.forEach((date) => {
    date.addEventListener('click', (event) => {
        event.target.style.color = 'red';
    })
})

//---------------- Function to hide posts other than the newest post ----------------

// Store all the buttons in posts in a nodelist
const visBtn = document.querySelectorAll('.post button')

// Main function
visBtn.forEach((button) => {
    addEventListener('click', (event) => {
        // Initialize empty arrays for storing post buttons and bottom content in
        const buttons = [];
        const bottom = [];
        // Store all the contents of the post in a temporary array
        let thisPost = Array.from(event.target.parentNode.children);
        // Loop through elements to store them in the arrays we just made
        thisPost.forEach((element) => {
            // Store the buttons in buttons array
            if (element.nodeName == 'BUTTON') {
                buttons.push(element);
            }
            // Store everything that isn't a button or the first paragraph in bottom array
            else if (element.className != 'first') {
                bottom.push(element);
            }
        })
        // Assign buttons to easier to identify variables
        const show = buttons[0];
        const hide = buttons[1];
        // Apply the event listener depending on which button was clicked
        if (event.target === hide) {
            // Toggle button displays
            hide.style.display = 'none';
            show.style.display = 'block';
            // Hide all bottom content
            bottom.forEach((element) => element.classList.add('hidden'));
        }
        else if (event.target === show) {
            // Store current scroll height
            let scroll = window.scrollY;
            // Toggle button displays
            hide.style.display = 'block';
            show.style.display = 'none';
            // Show all bottom content
            bottom.forEach((element) => element.classList.remove('hidden'));
            // Put user at the scroll height they were at before expanding to avoid disorientation
            scrollTo(0, scroll);
        }
    })
})

// Store post sections in nodelist, seperate latest post into seperate variable
const postSections = document.querySelectorAll('section');
const latest = postSections[postSections.length - 1];

// Function for applying proper display on page load
postSections.forEach((post) => {
    // Run on every post except the latest one
    if (post != latest) {
        // Store classes of items not to be hidden
        const shown = ['first', 'show']
        // Get everything stored in the section
        contents = Array.from(post.children)
        // Chanfe display properties based on class
        contents.forEach((item) => {
            // If class is not included in the 'shown' array, hide it
            if (!shown.includes(item.className)) {
                item.classList.add('hidden');
            }
            // The show button defaults to a display of none, so we need to toggle that
            else if (item.className == 'show') {
                item.style.display = 'block';
            }
        })
    }
})