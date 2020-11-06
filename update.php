<?php

    /*
    1 - isset to call a function
    2 - create a connection to the database
    3 - store the user input into variables
    4 - set up our INSERT query, run it
    5 - close conection
    6 - redirect the user back to index.php
    */

    function updateRecord(){
    
         // create a connection to our database
         $servername = "localhost";
         $username = "root";
         $password = "";
         $databasename = "movie_database";

         //Creating a conncetion to the database

         $connection = mysqli_connect($servername, $username, $password, $databasename);

        // store user input inside variables

        $id = $_POST["update-id"];
        $movieTitle = $_POST["update-title"];
        $movieGenre = $_POST["update-genre"];
        $movieDirector = $_POST["update-director"];

        //define our update query
        $sql - "UPDATE movieFlix_table SET title='$movieTitle', genre='$movieGenre', director='$movieDirector' WHERE id='$id'";
        $updateQuery = mysqli_query($connection, $sql); //executed our sql query
        
        if(!$updateQuery){
            echo "Error: ".$sql.mysqli_error($connection);
        }
        
        //close connection
        mysqli_close($connection);

        //redirect the user back to index.php
        header("location: index.php");

    }

    if(isset($_POST["submit-update"])){
           updateRecord();

    }

?>