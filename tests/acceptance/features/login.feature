Feature:Login
    As a User
    I want to login in to my account
    So that i can browse homepage

Scenario:Login with valid credential
    Given the user has browsed to the login page
    When the user logs in with username "sagar12345" and password "sagar12345" using webUI
    Then the user should be in homepage

Scenario: Login with invalid credential
    Given the user has browsed to the login page
    When the user logs in with username "sagar1" and password "sagar3" using webUI
    Then the error message "Login Credential Did Not Match !!!" should be displayed on the webUI


Scenario: Login with invalid password
    Given the user has browsed to the login page
    When the user logs in with username "sagar12345" and password "sagar3" using webUI
    Then the error message "Password did not match Matched!!!" should be displayed on the webUI

Scenario: Login with invalid username
    Given the user has browsed to the login page
    When the user logs in with username "sagar123" and password "sagar12345" using webUI
    Then the error message "Login Credential Did Not Match !!!" should be displayed on the webUI


