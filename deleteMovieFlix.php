<?php

/*
1 - isset to call a function
2 - create a connection to the database
3 - store the user input into variables
4 - set up our INSERT query, run it
5 - close conection
6 - redirect the user back to index.php
 */


function deleteRecord(){

      // create a connection to our database
      $servername = "localhost";
      $username = "root";
      $password = "";
      $databasename = "movie_database";

      //Creating a conncetion to the database

      $connection = mysqli_connect($servername, $username, $password, $databasename);

      // create an ID variable
      $id = $_POST["delete-ID"];

      //define our sql query
      $sql = "DELETE FROM movieFLix_table WHERE id ="$id"";

      //execute our sql query
      mysqli_query($connection, $sql);

      if(!$deleteQuery){
          echo "Error: ".$sql.mysqli_error($connection);
      }
      
      // close database connection
      mysqli_close($connection);

      //redirect the user back to index.php
      header("location: index.php");


}

if(isset($_POST["submit-delete"])){
    deleteRecord();
}


?>


