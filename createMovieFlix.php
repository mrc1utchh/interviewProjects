<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $databasename = "movie_database";

    //Creating a conncetion to the database

    $connection = mysqli_connect($servername, $username, $password, $databasename);

    //check if the connection was successful
    if($connection){
        die("Connection Unsuccessful :".mysqli_connect_error());
    }else{
        echo "Connection Success!";
    }

    //Storing userInput into variable
    $movieTitle = $_POST["create-title"];
    $movieGenre = $_POST["create-genre"];
    $movieDirector = $_POST["create-director"];

    //Attempting to INSERT Data into our table
    $sql = "INSERT INTO movieflix_table (title, genre, director) VALUES ('$movie_title', '$movie_genre', '$movie_director')";

    //check if inserting data was successful
    if(mysqli_query($connection, $sql)){
        echo "";
    }else{
        echo "Error: ".$sql.mysqli_error($connection);
    }

    // Close Connection
    mysqli_close($connection);

    //re-directing the user back to the main page index.php
    header("location: index.php");


if(isset($_POST["create-button"])){
    // create record function 
    createRecord();
    }

?>
