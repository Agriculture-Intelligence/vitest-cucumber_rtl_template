Feature: Inventory 
    Scenario: User wants to press count button 
        Given the button count is set to 0
        When the user clicks on the button
        Then the button count should be set to 1 