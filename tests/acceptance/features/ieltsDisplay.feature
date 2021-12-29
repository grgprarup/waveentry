Feature: Display yes ielts


    As a User
    I want to display ielts yes section
    So that i can enter ielts data

    Scenario: display ielts yes section to enter data
        Given the user has logged in with username "sagar12345" and password "sagar12345"
        And the user has browsed to homepage and registerpage
        When the user selects "yes" for ielts
        Then title "Please enter your ielts score" should be displayed
