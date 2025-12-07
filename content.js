(function () {

  function onCalendarPlatesReady() {
    
    const btnSchedulerExtensionId = "btn-scheduler-extension";
    if (document.getElementById(btnSchedulerExtensionId)){
      console.warn("Automation btn already exists, aborting script.");
      return;
    } 

    const targetElement = document.querySelector("ion-button.primary");
    if (!targetElement) {
      console.warn("Target element not found, aborting script.");
      return;
    }

    const button = document.createElement("ion-button");
    button.id = btnSchedulerExtensionId;
    button.setAttribute("color", "tertiary");
    button.innerHTML = '<ion-icon name="rocket-outline" slot="start"></ion-icon>Confirmar todos';

    button.addEventListener("click", async () => {
      console.debug("Automation started");
    
      const days = document.getElementsByClassName("workArround wrapper-requisitions");
      
      console.debug(`Clicking ${days.length} day(s)...`);
      for(let i = 0; i < days.length; i++){
        const inputElement = days[i].getElementsByClassName("c-requisition-edit on");
        if (inputElement.length > 0) continue;

        days[i].click();
        await new Promise(r => setTimeout(r, 80)); 
      }

      const submitBtn = document.querySelector("ion-button.report.primary.button");
      if (submitBtn) {
        submitBtn.click();
      } else {
        console.warn("Submit button not found.");
      }
    });

    targetElement.before(button);
    console.debug("Scheduler btn injected with success.");
  }

  const observableClassName = "calendar-info-plates";

  const existing = document.querySelector(`.${observableClassName}`);
  if (existing) {
    onCalendarPlatesReady(existing);
    observer.disconnect();
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === 1) {
          const el = node.classList?.contains(observableClassName)
              ? node
              : node.querySelector?.(`.${observableClassName}`);

          if (el) {
            onCalendarPlatesReady(el);
          }
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})();
