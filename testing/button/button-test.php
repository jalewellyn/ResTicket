<html>
    <head>
        <script type="text/javascript" src="validate-radio.js"></script>
    </head>
    
    <body>
        <form id='form' name='define_problem' class='cssform' action='questionaire_conduit.php'>     
              <div id='form'>
              <p>
              <input type='radio' class='radio' name='problem_type' value='Computer' /> I am experiencing a problem with my computer.
              
              <br />
              
              <input type='radio' name='problem_type' value='Internet' /> I am experiencing a problem with my internet connection.
              
              <br />
              
              <center><button type='submit' class='button green medium' onclick='validate_problem(define_problem);return false;'>Next</button></center>
              
            </form>
    </body>
</html>