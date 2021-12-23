Feature: Edit student
    As a User
    I want to edit student details
    So that student details are updated on homepage

Scenario: Update a particular student details
    Given the user has logged in with username "sagar12345" and password "sagar12345"
    And the user has browsed to edit student page
    When the user enters email "sagargurung10001@gmail.com"  and phone "984372642"
    Then the message "user update successfull" is displayed 