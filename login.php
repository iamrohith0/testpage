<?php
$servername = "localhost";
$username = "shibudenam"; // Replace with your database username
$password = "pass123"; // Replace with your database password
$dbname = "registration"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    // Retrieve user data
    $sql = "SELECT password FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    
    if ($stmt->num_rows == 1) {
        $stmt->bind_result($hashedPassword);
        $stmt->fetch();

        // Verify password
        if (password_verify($password, $hashedPassword)) {
            echo "<h1>Login Successful</h1>";
        } else {
            echo "<h1>Invalid Password</h1>";
        }
    } else {
        echo "<h1>No user found with this email</h1>";
    }

    $stmt->close();
}

$conn->close();
?>
