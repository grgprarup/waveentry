Feature: Add student
    As a user
    I want to add new student
    So that I can organize student data

    Background:
        Given the user has logged in with username "username" and password "password"
        And the user has browsed to home page

    Scenario: Add student with proper information
        When the user add students with name "name" email "email" address "address" phone "phone" qualification "qualification" percentage "percentage" destination "destination" ielts "No"
        Then the message "User Registration Successfull" should be displayed

    Scenario: check visibility of IELTS score form
        Given the user has browsed to add student page
        When the user selects "yes" option in IELTS
        Then "Please enter your ielts score" should be displayed
        And ielts band form should be displayed

    Scenario: Add students with ielts score
        Given the user has browsed to add student page
        When the user add students with name "name" email "email" address "address" phone "phone" qualification "qualification" percentage "percentage" destination "destination" ielts "Yes" listening "" speaking "" reading "" writing "" overall band ""
        Then the message "User Registration Successfull" should be displayed