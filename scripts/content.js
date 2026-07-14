const observer = new MutationObserver(async (mutations) => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement))
                continue;

            if (node.matches("ytd-notification-renderer")) {
                const link = node.querySelector("a");

                if (link?.href.includes("/shorts/")) {
                    node.remove();
                }

            }
        }
    }
});

const popupContainer = document.querySelector("ytd-popup-container");
observer.observe(popupContainer, { childList: true, subtree: true });