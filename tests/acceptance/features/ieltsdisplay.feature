Feature: Display yes ielts


    As a User
    I want to display ielts yes section
    So that i can enter ielts data

Scenario: display ielts yes section to enter data
    Given the user loggedin with username "sagar12345" and password "sagar12335"
    And the user browsed to add new student page
    When the user selects "yes" for ielts 
    Then ielts data section is 