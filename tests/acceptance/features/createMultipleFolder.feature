Feature: Create multiple Folders

    As a user
    I want to create multiple folders
    So that i can save my files inside the folders


    Scenario: Create a folder

    Given the user has logged in with username "sagar12345" and password "sagar12345"
    When the user creates the given folders
        |foldername|
        |folder1|
        |folder2|
        |folder3|
        |folder4|
        |folder5|
    Then the folders should be created