Feature: Create multiple folder
    As a user
    I want to create multiple folder
    So that I can manage files

    Scenario Outline: creating folder
        Given the user has logged in with username "username" and password "password"
        And the user has browsed to create folder page
        When the user creates the following folders
            | foldername |
            | folder1    |
            | folder2    |
            | folder3    |
        Then the folders should be created

