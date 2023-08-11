# Junior Developer Recruitment Challenge

**Task Overview:**

In this recruitment challenge, we are seeking a junior developer who can demonstrate proficiency in HTML, CSS, JavaScript, React, API integration, and version control using Git. The challenge consists of creating a simple product listing web application that fetches and displays product information from a JSON API.

**Task Duration:**
Up to 3 hours

**Technologies and Skills Tested:**
- HTML
- CSS
- JavaScript
- React
- API Connection
- Git

**Task Description:**

You are required to create a basic web application that displays a list of products fetched from a JSON API. The application should have a responsive design and should be built using React components.

**Task Steps:**

1. Clone the starter repository from the provided Git repository [URL](https://github.com/ElmarkTW/recruitment-task.git). 

2. Prepare API based on Free API Editor [mocki.io](https://mocki.io/) from project source file /api/products.json

3. Set up a new React application within the cloned repository.

3. Create a component to fetch data from self prepared JSON API.

4. Display the fetched product data in a visually appealing manner. Each product should be displayed as a card containing the following information:
   - Product Name
   - Description
   - Manufacturer
   - Availability (In Stock/Out of Stock) - if attribute "is_salable" = 0 don't display product.
   - Price - net / gross (calculated based on tax and api net price) - with special display information and price calculation for promotion if applicable (promotional discount applies to the net price)
   - New product notification if applicable

5. Implement a basic filtering mechanism that allows users to filter products based on their availability (In Stock/Out of Stock).

6. Apply basic styling using CSS to enhance the visual appeal of the application.

7. Ensure the application is responsive and provides a seamless user experience on both desktop and mobile devices.

8. Initialize a Git repository for version control and commit your changes regularly.

9. Push your completed solution to your GitHub repository and share the repository URL with us.

**Additional Instructions:**

- Attributes "tax" and "promotion_discount" are expressed as a percentage.
- Use modern JavaScript ES6+ syntax.
- Focus on writing clean, well-organized, and maintainable code.
- You are allowed to use third-party libraries if necessary (e.g., Axios for API requests).
- The design and styling can be minimal but should be presentable.
- Feel free to add any extra features or improvements beyond the basic requirements if time allows.

**Evaluation Criteria:**

You will be evaluated based on the following criteria:
- Code quality and organization
- Correct implementation of React components and state management
- Accurate fetching and displaying of product data from the JSON API
- Responsive design and user experience
- Proper use of Git for version control

**Submission:**

Please submit your solution by sharing the URL of your Git repository containing the completed challenge. Include a README file with any necessary setup instructions.

**Note:**
If you have any questions or need clarification during the challenge, feel free to contact us via email. Good luck, and we look forward to reviewing your submission!
