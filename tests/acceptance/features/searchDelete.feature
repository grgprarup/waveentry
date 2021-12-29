Feature: Search and Delete User


    As an admin
    I want to search and delete user
    So that i can delete inactive User

    Scenario: search and delete when user is in the lists
        Given the admin has logged in with username "sagar12345" and password "sagar12345"
        And the admin is on homepage
        When the admin enters "sagar" in the search input field in the webUI
        And the admin deletes the user using webUI
        Then the admin should see a modal with message "User Delete Successfull !!"

