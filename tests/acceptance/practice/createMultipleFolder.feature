Feature: Create multiple folder
    As a user
    I want to create multiple folder
    So that I can manage files

    Scenario: creating folder
        Given the user has logged in with username "username" and password "password"
        And the user has browsed to create folder page
        When the user creates the following folders
            | foldername |
            | folder1    |
            | folder2    |
            | folder3    |
        Then the folders should be created

        Given a user is created with username "artur" and sirname "neumann" and birthday "1982/05/15" and amilystatus "married" and amount of childrren "0"


        Given a user is created with following details
            | username | sirname | birthday   |
            | artur    | neumann | 1982/05/15 |
            | prarup   | gurung  | 1991/07/18 |

            | username | artur      |
            | sirname  | neumann    |
            | birthday | 1982/05/15 |
