Feature: View student details
    As a user
    I want to view student details
    So that I can use information of student for further process

    Scenario: View student detail information
        Given the user has logged in with username "sagar12345" and password "sagar12345" using the webUI
        When the user views student details information using the webUI
        Then the individual details should be visible