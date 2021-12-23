Feature: Create multiple User
    As an admin
    I want to create multiple User
    So that I can store multiple user details

    Scenario Outline: creating
        Given an admin has logged in with username "username" and password "password"
        And an admin has browsed to create user page
        When an admin creates user with username <username> and password <password>
        Then the user <username> should be created

        Examples:
            | username | password   |
            | user     | user@123   |
            | user2    | user@12    |
            | user3    | user@12345 |