Feature: Invalid login

Scenario: Invalid user validation
    Given I navigate to the application
    When I enter the user name "invalid_user" and password "wrong_pass"
    Then I click on sudmit button
    And error been displayed
