Feature: Valid user

Background: Login
    Given I navigate to the application
    When I enter the user name "standard_user" and password "secret_sauce"
    Then I click on sudmit button

  Scenario: valid user validations for selecing a product and moving to cart
    Then I click on addtocart button
    Then I click the tshirt
    #Then displays the inventory-item-name
    And I click the shoppingcart
    And it displays the checkout button

  Scenario: Sort verification by price in descending
    And I select the filterdropdown option
    And I verify the sorting order is correct

  Scenario: End to end secnario with checkout option and detail verification
    Then I click on addtocart button
    Then I click the tshirt
    And I click the shoppingcart
    #Then displays the inventory-item-name
    And selected products are displayed
    #And it displays the checkout button
    And I click the checkout button
    Then swag labs page displayed
    Then I enter firstname "abcd" lastname "12345" and zippostal code "404040"
    And I click the continue button
    And I click the finish button

Scenario: Invalid user validation
    Given I navigate to the application
    #When I enter the user name "standard" and password "secret"
    When I enter the user name "invalid_user" and password "wrong_pass"
    Then I click on sudmit button
    And error been displayed
