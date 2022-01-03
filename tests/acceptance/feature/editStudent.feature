Feature: Edit student
    As a user
    I want to edit existing student
    So that I can update student data

    Background:
        Given the user has logged in with username "sagar12345" and password "sagar12345" using the webUI
        And the user has browsed to home page and edit student page

    Scenario: Edit student without IELTS score
        When the user edits student with following information
            | Name          | Sagar Gurung |
            | Email         | sg@gmail.com |
            | Address       | Pokhara      |
            | Phone         | 9334506665   |
            | Qualification | bachelors    |
            | Percentage    | 3            |
            | Destination   | australia    |
            | IELTS         | no           |
        Then the successfull update message should be visible

    Scenario: Edit student with IELTS score
        When the user edits student with following information
            | Name          | Prarup Gurung             |
            | Email         | pras3754545763s@gmail.com |
            | Address       | Pokhara                   |
            | Phone         | 9334506665                |
            | Qualification | masters                   |
            | Percentage    | 3                         |
            | Destination   | australia                 |
            | IELTS         | yes                       |
            | Listening     | 7                         |
            | Reading       | 6                         |
            | Writing       | 6                         |
            | Speaking      | 7                         |
            | OverallBand   | 8                         |
        Then the successfull update message should be visible