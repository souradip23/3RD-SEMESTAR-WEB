// This is the function that will use the callback
function processUserData(userId, callback) {
    // Simulate an asynchronous operation like fetching data
    setTimeout(() => {
        // Sample data
        const userData = { id: userId, name: "John Doe" };
        // Call the callback function with the user data
        callback(userData);
    }, 1000);
}

// This is the callback function
function handleUserData(data) {
    console.log("User data received:", data);
}

// Call processUserData and pass handleUserData as the callback
processUserData(1, handleUserData);
