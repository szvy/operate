async function checkWebsite() {
    const website = document.getElementById('websiteInput').value.trim();
    const statusText = document.getElementById('status');

    if (!website) {
        statusText.innerHTML = "please enter a website";
        return;
    }

    try {
        const response = await fetch(`https://www.operate.lol/api/check?site=${encodeURIComponent(website)}`);
        const data = await response.json();

        if (data.status === "UP") {
            statusText.innerHTML = `✅ ${website} is up`;
            statusText.style.color = "green";
        } else {
            statusText.innerHTML = `❌ ${website} is down`;
            statusText.style.color = "red";
        }
    } catch (error) {
        statusText.innerHTML = `⚠️ error checking status.`;
        statusText.style.color = "yellow";
    }
}
