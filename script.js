document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const uploadButton = document.getElementById("uploadButton");
    const statusMessage = document.getElementById("statusMessage");
    const retentionPeriod = document.getElementById("retentionPeriod");

    uploadButton.addEventListener("click", async () => {
        const file = fileInput.files[0];
        const selectedRetention = retentionPeriod.value;

        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            try {
                const response = await fetch("https://upload-backend.maamokun.workers.dev/", {
                    method: "POST",
                    body: formData,
                    mode: "no-cors",
                    headers: {
                        "Expires-At": selectedRetention,
                    },
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
