Feature: Login
    As a user
    I want to login to my account
    So that I can browse homepage

    Scenario: Login with valid credentials
    Given the user has browsed to login page
    When the user logs in with username "sagar12345" and password "sagar12345" using the webUI
    Then the user should be in homepage

    Scenario: Attempt to Login with invalid username
    Given the user has browsed to login page
    When the user logs in with username "username" and password "sagar12345" using the webUI
    Then the error message "Login Credential Did Not Match !!!" should be displayed on the webUI

    Scenario: Attempt to Login with invalid password
    Given the user has browsed to login page
    When the user logs in with username "sagar12345" and password "password" using the webUI
    Then the error message "Password did not match Matched!!!" should be displayed on the webUI
    
    Scenario: Attempt to Login with invalid credentials
    Given the user has browsed to login page
    When the user logs in with username "username" and password "password" using the webUI
    Then the error message "Login Credential Did Not Match !!!" should be displayed on the webUI
