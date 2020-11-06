<!DOCTYPE html>
<html>

    <head>
        <title>movieFlix CRUD App</title>
        <style>
        
        #create-form, #update-form, #delete-form{
            display: none;
        }

        .main-div{
            width: 80vw
            margin: 0 auto;
        }

        h2{
            text-align: center;
        }

        table{
            margin: 15px auto;
            width: 50vw;
            text-align: center;
        }

        table tr td{
            padding: 12pc;
        }

        .content-wrapper{
            width: 100%;
            margin: 0 auto;
            text-align: center;
        }

        #create-button, #edit-button, #delete-button{
            width: 140px;
            height: 37.5px;
            background-color: blue;
            color: #FFFFFF;
            border-radius: 1.5px solid black;
            letter-spacing: 1.5px;
            cursor: pointer;
        }

        .small-button{
            width: 76px;
            height: 30px;
            background-color: blue;
            color: #FFFFAA;
            border-radius: 2px;
            border: none;
            cursor: pointer;
        }


        input[type="text"]{
            margin: 6px;
            width: 200px;
            height: 22px;
            padding: 3px;
        }

        </style>
    </head>
    
    <body>
        <div class="main-div">
         <?php require_once "create.php"; ?>

    <div>
         <h2>movieFlix CRUD Application</h2>
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
                    }

                    //Query the table for therecords
                    $sql = "SELECT + FROM movieFlix_table";//set up our query
                    $result = mysqli_query($connection, $sql);//store the result of our query into the $result
                    $rowCount = mysqli_num_rows($result);

                    if($rowCount > 0){
                        echo "
                            <table>
                                <thead>
                                    <tr>
                                        <th>Record ID</th>
                                        <th>Title</th>
                                        <th>Genre</th>
                                        <th>Director</th>
                                    </tr>
                                 </thead>

                        ";
                    }
                    
              ?>

              <?php
                while($row = $result->fetch_assoc() ?>
                <tr>
                    <td><?php echo $row["id"] ?></td>
                    <td><?php echo $row["title"] ?></td>
                    <td><?php echo $row["genre"] ?></td>
                    <td><?php echo $row["director"] ?></td>
                </tr>
                 <?php endwhile ?>
            </table>

    </div>
       
    <div class="content-wrapper"> 
       <button id="create-button">Create Record</button>
        <button id="edit-button">Edit Record</button>
        <button id="delete-button">Delete Record</button>


        <form action="create.php" method="POST" id="create-form">
            <input type="text" placeholder="Enter Movie Title"  name="create-title"><br />
            <input type="text" placeholder="Enter Movie Genre"  name="create-genre"><br />
            <input type="text" placeholder="Enter Movie Director" name="create-director"><br />
            <input type="submit" value="Save" name="create-button" class="small-button">
        </form>

        <form action="update.php" method="POST" id="update-form">
            <input type="text" placeholder="Enter Movie Title"  name="update-title"><br />
            <input type="text" placeholder="Enter Movie Genre"  name="update-genre"><br />
            <input type="text" placeholder="Enter Movie Director" name="update-director"><br />
            <input type="submit" value="Save" name="submit-update" class="small-button">
        </form>

        <form action="delete.php" method="POST" id="update-form">
            <input type="text" placeholder="Enter REcord ID" name="delete-id"><br />
            <input type="submit" value="Save" name="submit-delete" class="small-button">
        </form>



       </div>
       </div>
       <script src="CRUD.js"></script>
    </body>

</html>

