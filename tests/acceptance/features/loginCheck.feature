Feature:Login
    As a User
    I want to login in to my account
    So that i can browse homepage

    Scenario:Login with valid credential
        Given the user has browsed to the loginpage
        When the user logs in with username "sagar12345" and password "sagar12345" using webui
        Then the user should be in home page