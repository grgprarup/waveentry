Feature: Add student
    As a user
    I want to add new student
    So that I can store student data

    Background:
        Given the user has logged in with username "sagar12345" and password "sagar12345" using the webUI
        And the user has browsed to home page and add student page

    Scenario: Add student without IELTS score
        When the user adds student with following information
            | Name          | Prarup Gurung      |
            | Email         | pra7657563s@gmail.com |
            | Address       | Pokhara            |
            | Phone         | 9334506665         |
            | Qualification | masters            |
            | Percentage    | 3                  |
            | Destination   | australia          |
            | IELTS         | no                 |
        Then the message "User Registration Successfull!!" should be displayed

    Scenario: Add student with IELTS score
        When the user adds student with following information
            | Name          | Prarup Gurung       |
            | Email         | pras3754545763s@gmail.com |
            | Address       | Pokhara             |
            | Phone         | 9334506665          |
            | Qualification | masters             |
            | Percentage    | 3                   |
            | Destination   | australia           |
            | IELTS         | yes                 |
            | Listening     | 7                   |
            | Reading       | 6                   |
            | Writing       | 6                   |
            | Speaking      | 7                   |
            | OverallBand   | 8                   |
        Then the message "User Registration Successfull!!" should be displayed

# Scenario: check visibility of IELTS score form
#     When the user selects "yes" option in IELTS
#     Then "Please enter your ielts score" should be displayed
#     And ielts band form should be displayed

# Scenario: Add students with ielts score
#     Given the user has browsed to add student page
#     When the user add students with name "name" email "email" address "address" phone "phone" qualification "qualification" percentage "percentage" destination "destination" ielts "Yes" listening "" speaking "" reading "" writing "" overall band ""
#     Then the message "User Registration Successfull" should be displayed