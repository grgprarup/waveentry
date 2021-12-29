Feature: Select ielts dropdown with xpath

    As a user
    I want to select ielts option
    So that it can be dynamic


    Scenario: select ielts option dynamically
        Given the user has logged in with username "sagar12345" and password "sagar12345"
        And the user has browsed to homepage and registerpage
        When user selects "yes" for ielts using webUI
        Then the user should see "yes" value in the dropdown