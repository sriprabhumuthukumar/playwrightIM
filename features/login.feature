Feature: Login functionality

Background:
Given user is on the login page

  Scenario: Login with valid credentials

    
    When user enters valid email and password
    Then user should see the username as logged
    And user should logout and navigate back to the home page

Scenario: Login with invalid credentials 

    When user enters invalid email and password
    Then user should see the error message 

   