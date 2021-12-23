Feature: Search student
    As a user
    I want to search student
    So that I can manage information of student

    Scenario: Search student with student name
    Given the user has logged in with username "username" and password "password"
    And the user has browsed to home page
    When the user search students with name "name"
    Then the list of student should be displayed that match name "name"