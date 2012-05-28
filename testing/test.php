<?php
$initialize_connection = mysql_connect("localhost","jalewellyn","Spendoman3");
	mysql_select_db("resticket");
			if (!$initialize_connection)
			{
  			die('Could not connect to database! CONNECTION FAILED!: ' . mysql_error());
			}


	$question_query = mysql_query("Select wizard_questions.question_id, wizard_question_choices.choice_text from wizard_questions
                                       JOIN wizard_question_choices on wizard_questions.question_id = wizard_question_choices.assoc_question_id;");
		while($row = mysql_fetch_assoc($question_query)){
                      $crap = $row['choice_text'];
                      echo $crap;
                    



                }



?>