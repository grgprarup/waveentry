Feature:Add student
    As a User
    I want to add new student
    So that I can organize student data

    Scenario:Add student with proper information
        Given the user has logged in with username "sagar12345" and password "sagar12345"
        And the user has browsed to homepage
        When the user add students with name "sagar gurung" email "sagargurung@1001gmail.com" address "pokhara" phone "984364234" qulification "bachelors" percentage "81" destination "canada" and ielts "no"
        Then the message "User Registration Successfull" should be displayed

    Scenario:check visibility of ielts score form 
        Given the user logged in with username "sagar12345" and password "sagar12335"
        And the user browsed to add new student page 
        When the user selects "yes" for ielts 
        Then "Please enter your ielts score" should be displayed 
        And  ielts band form should be displayed


