Feature:Add student
    As a User
    I want to add new student
    So that I can organize student data

    # Scenario:Add student with proper information
    #     Given the user has logged in with username "sagar12345" and password "sagar12345"
    #     And the user has browsed to homepage and registerpage
    #     When the user add students with name "milgurung" email "mil@gmail.com" address "pokhara" phone "984364234" qulification "masters" percentage "81" destination "canada" and ielts "no"
    #     Then the message "User Registration Successfull!!" should be displayed

    Scenario:Add student with proper information
        Given the user has logged in with username "sagar12345" and password "sagar12345"
        And the user has browsed to homepage and registerpage
        When the user enters following data
            | name          | lampd            |
            | email         | lampad@gmail.com |
            | address       | england          |
            | phone         | 123456789        |
            | qualification | masters          |
            | percentage    | 66               |
            | destination   | canada           |
            | ielts         | no               |
        Then the message "User Registration Successfull!!" should be displayed

