# Build a Secure Nodejs REST API part one

## This Nodejs REST API part one USES best APIs practices  and is designed to be secure and easy to use

***

The APIs could be improve over time to be more secure.

### Check out [Build-a-Secure-Nodejs-REST-API-part-two github repo](https://github.com/rqkohistani/Build-a-Secure-Node-js-REST-API-part-two-with-mysql)

***

## Login

### Login with username and password

1. dataBaseJson
      - adminsAndUsersLists
      - select an admin or user
2. Save the token
    - Click on the Nodejs REST API part one V1 collection
    - go to Variables
    - paste in the tokeny
    - tokenPartOneV1
    - Make sure one of tokenPartOneV1 selected
    - Note: at the same multiple user could been logged in.
    - click on the Save button
    - ![Save the token](loginToken.PNG)

3. Use the ***me** route to see if you are logged in
    - Click on the me route
    - Click on the Send button
    - ![me route](meRoute.PNG)

### Create an admin or user

1. Click on the admin/admin post route
2. Fill new Admin or user credentials in the Body
3. Validation is would take of if unnecessary fields are added
4. Click Send
5. ![Create an admin](newAdmin.PNG)
6. ![Admin created](newAdminCreated.PNG)

***

### Update an admin or user

1. Click on the admin/admin upate route
2. Edit Admin or user credentials in the Body
3. Params
    - id: the id of the admin or user
4. Validation is would take of if unnecessary fields are added
5. Click Send
6. ![Update an admin](updateAdminBody.PNG)
7. ![Update an admin](updateAdminParams.PNG)
    - check the data or get the admin or user route to see if the admin or user has been updated

8. ![Admin updated](getAdminByAdminId.PNG)
9. delete the admin or user

The rest would be the same. You got the idea.

***

## create a new user. OBS: the user is not an admin or user. It is a new user. The could be renamed to customer or client. It is up to you. However, lets keep it this way for now

1. Click on the user/user post route
2. Fill new user credentials in the Body
3. Validation is would take of if unnecessary fields are added
4. Click Send
5. ![Create a new user](newUser.PNG)
6. ![User created](newUserCreated.PNG)
7. Go to getAllUsers route
    - you should see the new user

***

## Update a user

1. Click on the user/user upate route
2. Edit user credentials in the Body
3. Params
    - id: the id of the user
4. Validation is would take of if unnecessary fields are added
5. Click Send
6. ![User Befor Updates](newUserBeforUpdates.PNG)
7. ![Update a user postman](updateUserParams_body.PNG)
    - check the data or get the user route to see if the user has been updated

8. ![Update a user database](updateUserParams_body_DB.PNG)

## Delete a user

Delete a user is the same as delete an admin. However, at the time of writing the delete user function the word "secret" field in the body must be presented. This is to prevent an admin from deleting another user. Without the secret word "secret" the admin cannot delete the user.

1. Click on the user/user delete route
2. Params
    - id: the id of the user
3. Body
    - secret: "secret"
4. Click Send
5. ![Delete the user](deleteUserParamsId.PNG)
6. ![Delete the user](deleteUserBody.PNG)
7. ![Deleted the user](deleteUseDeleted.PNG)

## create a user post

1. Click on the user/user post route
2. Fill new post userId, title and body in the Body
3. OBS: Validation is would take of if unnecessary fields are added
4. Click Send
5. ![Create a new user post](newUserPost.PNG)
6. ![User created](newUserPostCreated.PNG)
7. Go to user get a user post by user id
    - you should see the new user post

8. ![Get all user post by user id](newUserAllUserPostByUserId.PNG)

***

## Update a user post

1. Click on the user/user post update route
2. Edit user post userId, title and body in the Body
3. Params
    - id: the id of the user post
4. Validation is would take of if unnecessary fields are added
5. Click Send
6. ![User post Befor Updates](userpostBeforeUpdates.PNG)
7. ![User post body](updateApostByPostIdandUseridBody.PNG)
8. ![User post params](updateApostByPostIdandUseridParams.PNG)
9. ![Updated a user post](updateApostByPostIdandUserid.PNG)
    - check the data or get the user post route to see if the user post has been updated

10. ![Update a user post database](updateUserPostParams_body_DB.PNG)

## Delete a user post

1. Click on the user/user post delete route
2. Params
    - id: the id of the user post
3. userId
    - id: the id of the user in body
4. Click Send

***

