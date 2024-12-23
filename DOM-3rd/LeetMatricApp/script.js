document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");

    // Return true or false based on a regex to validate username
    function validateUsername(username) {
        if (username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username) {
        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            
            const graphqlQuery = JSON.stringify({
                query: `
                    query userSessionProgress($username: String!) {
                        allQuestionsCount {
                            difficulty
                            count
                        }
                        matchedUser(username: $username) {
                            submitStats {
                                acSubmissionNum {
                                    difficulty
                                    count
                                    submissions
                                }
                                totalSubmissionNum {
                                    difficulty
                                    count
                                    submissions
                                }
                            }
                        }
                    }
                `,
                variables: { username: username }
            });

            const requestOptions = {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: graphqlQuery
            };

            // Assuming you have a backend to make this request
            const response = await fetch(`/api/leetcode`, requestOptions); // Make request via your backend proxy
            if (!response.ok) {
                throw new Error("Unable to fetch the User details");
            }
            const parsedData = await response.json();
            console.log("User Data:", parsedData);

            displayUserData(parsedData);
        } catch (error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`;
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved / total) * 100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(parsedData) {
        const totalEasyQues = parsedData.data.allQuestionsCount.find(q => q.difficulty === 'Easy').count;
        const totalMediumQues = parsedData.data.allQuestionsCount.find(q => q.difficulty === 'Medium').count;
        const totalHardQues = parsedData.data.allQuestionsCount.find(q => q.difficulty === 'Hard').count;

        const solvedTotalEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum.find(q => q.difficulty === 'Easy').count;
        const solvedTotalMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum.find(q => q.difficulty === 'Medium').count;
        const solvedTotalHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum.find(q => q.difficulty === 'Hard').count;

        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);

        const cardsData = [
            { label: "Overall Submissions", value: parsedData.data.matchedUser.submitStats.totalSubmissionNum.reduce((sum, q) => sum + q.submissions, 0) },
            { label: "Overall Easy Submissions", value: parsedData.data.matchedUser.submitStats.totalSubmissionNum.find(q => q.difficulty === 'Easy').submissions },
            { label: "Overall Medium Submissions", value: parsedData.data.matchedUser.submitStats.totalSubmissionNum.find(q => q.difficulty === 'Medium').submissions },
            { label: "Overall Hard Submissions", value: parsedData.data.matchedUser.submitStats.totalSubmissionNum.find(q => q.difficulty === 'Hard').submissions }
        ];

        cardStatsContainer.innerHTML = cardsData.map(
            data =>
                `<div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                </div>`
        ).join("");
    }

    searchButton.addEventListener('click', function () {
        const username = usernameInput.value;
        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    });
});
