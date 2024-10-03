const addConnectButton = () => {
  const button = document.createElement("button");
  button.innerText = "Connect with All";
  button.style.position = "fixed";
  button.style.top = "15px"; // Adjusted for better visibility
  button.style.right = "20px";
  button.style.padding = "10px";
  button.style.backgroundColor = "#0073b1";
  button.style.color = "white";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.zIndex = "9999"; // Ensure it's above other elements
  button.style.fontSize = "18px"; // Responsive font size
  button.style.borderRadius = "5px"; // Rounded corners
  button.style.transition = "background-color 0.3s, transform 0.2s"; // Smooth transitions

  button.onmouseover = () => {
    button.style.backgroundColor = "#005582"; // Darker blue on hover
    button.style.transform = "scale(1.05)"; // Slightly increase size
  };

  button.onmouseout = () => {
    button.style.backgroundColor = "#0073b1"; // Original color
    button.style.transform = "scale(1)"; // Return to original size
  };

  button.onmousedown = () => {
    button.style.backgroundColor = "#003f5c"; // Even darker blue when clicked
    button.style.transform = "scale(0.95)"; // Slightly decrease size
  };

  button.onmouseup = () => {
    button.style.backgroundColor = "#005582"; // Change back to hover color
  };

  

  document.body.appendChild(button);

  let connecting = false; // To prevent multiple clicks
  const updateButtonPosition = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Adjust button size based on screen size
    button.style.padding = screenWidth < 600 ? "5px" : "10px"; // Smaller padding on smaller screens
    button.style.fontSize = screenWidth < 600 ? "14px" : "16px"; // Smaller font size on smaller screens
  };
  button.addEventListener("click", () => {
    if (connecting) return; // Prevent multiple clicks
    connecting = true;
    connectAll();
  });

  // Event listener for window resize
  window.addEventListener("resize", updateButtonPosition);
  updateButtonPosition(); // Call initially to set the right size

  // Function to connect with all visible buttons
  const connectAll = async () => {
    while (true) {
      const connectButtons = Array.from(
        document.querySelectorAll("button")
      ).filter(
        (btn) =>
          btn.querySelector(".artdeco-button__text")?.textContent.trim() ===
          "Connect"
      );

      // Log how many connect buttons are found
      console.log(`Found ${connectButtons.length} connect buttons.`);

      if (connectButtons.length === 0) {
        console.log("No more connect buttons found. Stopping.");
        break; // Exit if no buttons are found
      }

      for (let i = 0; i < connectButtons.length; i++) {
        connectButtons[i].click(); // Trigger click on connect button
        await new Promise((res) =>
          setTimeout(res, Math.random() * 2000 + 1000)
        ); // Random delay
      }

      // Scroll to trigger loading more buttons (if applicable)
      window.scrollBy(0, 100); // Adjust the scroll amount as necessary

      // Wait for a short duration to allow new buttons to load
      await new Promise((res) => setTimeout(res, 1000));
    }
    connecting = false; // Reset the connecting flag
  };

  // Observe mutations for new connect buttons
  const observeConnectButtons = () => {
    const observer = new MutationObserver(() => {
      const connectButtons = Array.from(
        document.querySelectorAll("button")
      ).filter(
        (btn) =>
          btn.querySelector(".artdeco-button__text")?.textContent.trim() ===
          "Connect"
      );

      console.log(
        `Mutation detected: Found ${connectButtons.length} connect buttons.`
      );
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  observeConnectButtons();
};

// Trigger the button creation on page load
window.onload = addConnectButton;
