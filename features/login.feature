Feature:login functionality 

Scenario: valid login
Given user is on login page
When user enters valid username and password
Then user should see inventory page 

Scenario: Invalid login
Given user is on login page
When user enters invalid username and password
Then user should see error message
