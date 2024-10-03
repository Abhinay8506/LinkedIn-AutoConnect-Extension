const addConnectButton = () => {
  const button = document.createElement("button");
  button.innerText = "Connect with All";
  button.style.position = "fixed";
  button.style.top = "15px"; 
  button.style.right = "20px";
  button.style.padding = "10px";
  button.style.backgroundColor = "#0073b1";
  button.style.color = "white";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.zIndex = "9999"; 
  button.style.fontSize = "18px"; 
  button.style.borderRadius = "5px"; 
  button.style.transition = "background-color 0.3s, transform 0.2s";

  button.onmouseover = () => {
    button.style.backgroundColor = "#005582"; 
    button.style.transform = "scale(1.05)"; 
  };

  button.onmouseout = () => {
    button.style.backgroundColor = "#0073b1";
    button.style.transform = "scale(1)"; 
  };

  button.onmousedown = () => {
    button.style.backgroundColor = "#003f5c"; 
    button.style.transform = "scale(0.95)"; 
  };

  button.onmouseup = () => {
    button.style.backgroundColor = "#005582"; 
  };

  

  document.body.appendChild(button);

  let connecting = false; 
  const updateButtonPosition = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    
    button.style.padding = screenWidth < 600 ? "5px" : "10px"; 
    button.style.fontSize = screenWidth < 600 ? "14px" : "16px"; 
  };
  button.addEventListener("click", () => {
    if (connecting) return; 
    connecting = true;
    connectAll();
  });

 
  window.addEventListener("resize", updateButtonPosition);
  updateButtonPosition(); 
  
  const connectAll = async () => {
    while (true) {
      const connectButtons = Array.from(
        document.querySelectorAll("button")
      ).filter(
        (btn) =>
          btn.querySelector(".artdeco-button__text")?.textContent.trim() ===
          "Connect"
      );

      
      console.log(`Found ${connectButtons.length} connect buttons.`);

      if (connectButtons.length === 0) {
        console.log("No more connect buttons found. Stopping.");
        break; 
      }

      for (let i = 0; i < connectButtons.length; i++) {
        connectButtons[i].click(); 
        await new Promise((res) =>
          setTimeout(res, Math.random() * 2000 + 1000)
        ); 
      }

      
      window.scrollBy(0, 100); 

      
      await new Promise((res) => setTimeout(res, 1000));
    }
    connecting = false; 
  };

  
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
