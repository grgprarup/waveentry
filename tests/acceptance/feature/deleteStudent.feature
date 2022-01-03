Feature: View student details
    As a user
    I want to delete student details
    So that I can remove student information from database

    Scenario: View student detail information
        Given the user has logged in with username "sagar12345" and password "sagar12345" using the webUI
        When the user deletes student using the webUI
        Then the success message should be visible