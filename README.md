## project 

# Build a Chrome Extension with React, to automate connection requests on LinkedIn.

# Project Overview:
1. Target URL: The extension should work on the following LinkedIn URL:
https://www.linkedin.com/mynetwork/grow/
2. UI Requirement: Add a button that floats on the page with the text: “Connect
with All”.
3. Functionality: When the “Connect with All” button is clicked, the extension
should automatically trigger a click event for all visible Connect buttons on
the page.
For example, if there are 50 suggested profiles with a Connect button, 50
connection requests should be sent.

# Additional Requirements:
1. Include a delay between each connection request to prevent LinkedIn from
blocking the account.
2. The delay can be around 1-3 seconds (you can adjust based on your
judgment).


## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Abhinay8506/LinkedIn-AutoConnect-Extension.git
   cd LinkedIn-AutoConnect-Extension

2. **Install dependencies**:
   ```bash
   npm install

3. **Build the extension**:
   ```bash
   npm run build


## Extension Setup

To run this extension, follow these steps:

1. **After installation , visit **:
   ```bash
   chrome://extensions/
2. **Upload extension**:
   ```bash
   Click on load unpacked
   upload your projects's dist folder (generated when npm run build is executed)

3. **Visit the LinkedIn page**:
   ```bash
   https://www.linkedin.com/mynetwork/grow/

4. **Finally Connect with all button**:
   ```bash
   click on "connect with all" , your connections request will start auto send.
