document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const uploadButton = document.getElementById("uploadButton");
    const statusMessage = document.getElementById("statusMessage");

    uploadButton.addEventListener("click", async () => {
        const file = fileInput.files[0];

        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            try {
                const response = await fetch("https://x.mikn.dev/api/upload/", {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Format": "RANDOM",
                        "Expires-At": "7d",
                        "Authorization": "OrbRBy7jhgX3MUmfAw6tDBgO.MTY5MzE3NTE0MTk1Ng",
                    }
                });

                const data = await response.json();
                statusMessage.textContent = data.message;
            } catch (error) {
                statusMessage.textContent = "An error occurred.";
            }
        } else {
            statusMessage.textContent = "Please select a file.";
        }
    });
});
