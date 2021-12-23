Feature: Add IELTS score
    As a User
    I want to add IELTS score of student
    So that IELTS score are stored

    Scenario: IELTS yes option selected
    Given the user has logged in with username "username" and password "password"
    And the user has browsed to home page
    And the user has browsed to add student page
    When the user selects "yes" option in IELTS
    Then the IELTS score entry form is displayed