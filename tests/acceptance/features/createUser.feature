Feature:Create multiple user

    As an admin
    I want to create multiple user
    So that the user can sign in to their account

    Scenario Outline:signup multiple user

        Given the admin has browsed to user registration page
        When the admin creates user with username <username> and password <password>
        Then user <username> should be created
        
        Examples:
            | username | password    |
            | sagar    | sagar12345  |
            | prarup   | prarup12345 |