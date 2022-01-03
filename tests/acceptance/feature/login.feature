Feature: Login
    As a user
    I want to login to my account
    So that I can secure my account

    Scenario: Login with valid credentials
        Given the user has browsed to login page
        When the user logs in with username "sagar12345" and password "sagar12345" using the webUI
        Then the user should be in homepage

    Scenario Outline: Attempt to Login with invalid credentials
        Given the user has browsed to login page
        When the user logs in with username '<username>' and password '<password>' using the webUI
        Then the error message '<message>' should be displayed on the webUI

        Examples:
            | username   | password   | message                              |
            | invalidusr | sagar12345 | "Login Credential Did Not Match !!!" |
            | invalidusr | invalidpwd | "Login Credential Did Not Match !!!" |
            | sagar12345 | invalidpwd | "Password did not match Matched!!!"  |

