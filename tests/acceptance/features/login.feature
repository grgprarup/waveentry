Feature:Login
    As a User
    I want to login in to my account
    So that i can browse homepage

    Scenario:Login with valid credential
        Given the user has browsed to the login page
        When the user logs in with username "sagar12345" and password "sagar12345" using webUI
        Then the user should be in homepage

    Scenario Outline: Attempt to login with invalid credential
        Given the user has browsed to the login page
        When the user logs in with username "<username>" and password "<password>" using webUI
        Then the error message "<message>" should be displayed on the webUI

        Examples:
            | username        | password        | message                            |
            | invalidusername | invalidpassword | Login Credential Did Not Match !!! |
            | invalidusername | sagar12345      | Login Credential Did Not Match !!! |
            | sagar12345      | invalidpassword | Password did not match Matched!!!  |


