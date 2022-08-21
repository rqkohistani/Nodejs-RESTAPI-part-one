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
    - Go to Variables
    - Paste in the token
    - tokenPartOneV1
    - Make sure one of tokenPartOneV1 is selected. 
      - Multiple of tokenPartOneV1 can be used but one must be selected at the time.
    - Note: at the same multiple user could been logged in.
    - click on the Save button
    - ![Save the token](./GithubImages/loginToken.PNG)

3. The  ***Get ...auth/me** route to see if you are logged in
    - Click on the me route
    - Click on the Send button
    - if successful you should see the following
    - else you will see a "message": "Invalid token"
    - ![me route](./GithubImages/meRoute.PNG)

***
### Create an admin or user

1. Click on the admin/admin post route
2. Fill new Admin or user credentials in the Body
3. Validation would take care of if unnecessary fields are added.
4. Click Send
5. ![Create an admin](./GithubImages/newAdmin.PNG)
6. ![Admin created](./GithubImages/newAdminCreated.PNG)

***

### Update an admin or user

1. Click on the admin/admin upate route
2. Edit Admin or user credentials in the Body
3. Params
    - id: the id of the admin or user
4. Validation would take care of if unnecessary fields are added.
5. Click Send
6. ![Update an admin](./GithubImages/updateAdminBody.PNG)
7. ![Update an admin](./GithubImages/updateAdminParams.PNG)
    - Check the data or get the admin or user route to see if the admin or user has been updated

8. ![Admin updated](./GithubImages/getAdminByAdminId.PNG)


### Other admin or user routes are the same. you can check them out. You got the idea

The rest would be the same. You got the idea.

***

## Create a new user

### OBS: the user is not an admin or user. It could be renamed to customer or client. It is up to you. However, lets keep it this way for now

1. Click on the user/user route
2. Fill new user credentials in the Body
3. Validation would take care of if unnecessary fields are added.
4. Click Send
5. ![Create a new user](./GithubImages/newUser.PNG)
6. ![User created](./GithubImages/newUserCreated.PNG)
7. Go to getAllUsers route
    - you should see the new user

***

## Update a user

1. Before updating the user details
1. ![User Befor Updates](./GithubImages/newUserBeforUpdates.PNG)
1. Click on the user/user update route
1. Edit user credentials in the Body
1. Params
    - id: the id of the user
1. Validation would take care of if unnecessary fields 1re added.
1. Click Send
1. ![Update a user postman](./GithubImages/updateUserParams_body.PNG)
    - check the data or get the user route to see if the user has been updated

1. ![Update a user database](./GithubImages/updateUserParams_body_DB.PNG)

## Delete a user

Delete a user is the same as delete an admin. However, at the time of coding the delete user function the word "secret" field in the body must be have been presented. This is to prevent an admin from deleting another user. Without the secret word "secret" the admin cannot delete the user.
It can be handle in roles and permissions. However, for now it is like this.

1. Click on the user/user delete route
2. Params
    - id: the id of the user
3. Body
    - secret: "secret"
4. Click Send
5. ![Delete the user](./GithubImages/deleteUserParamsId.PNG)
6. ![Delete the user](./GithubImages/deleteUserBody.PNG)
7. ![Deleted the user](./GithubImages/deleteUseDeleted.PNG)

***

## Create a user post

1. Click on the user/user post route
2. Fill the post body with userId, title and body in as the json format
3. OBS: Validation would take care of if unnecessary fields are added.
4. Click Send
5. ![Create a new user post](./GithubImages/newUserPost.PNG)
6. ![User created](./GithubImages/newUserPostCreated.PNG)
7. Go to user get a user post by user id
    - You should see the new user post

8. ![Get all user post by user id](./GithubImages/newUserAllUserPostByUserId.PNG)

***

## Update a user post

1. Click on the user/user post update route
2. Edit user post userId, title and body in the Body
3. Params
    - id: the id of the user post
4. Validation would take care of if unnecessary fields are added.
5. Click Send
6. ![User post Befor Updates](./GithubImages/userpostBeforeUpdates.PNG)
7. ![User post body](./GithubImages/updateApostByPostIdandUseridBody.PNG)
8. ![User post params](./GithubImages/updateApostByPostIdandUseridParams.PNG)
9. ![Updated the user post](./GithubImages/updatedpostByPostIdandUserid.PNG)
    - check the data or get the user post route to see if the user post has been updated

## Delete user post

1. Click on the user/user post delete route
2. Params
    - id: the id of the user post
3. userId
    - id: the id of the user in body
4. Click Send

***

### THANK YOU FOR READING THIS DOCUMENTATION. I HOPE YOU ENJOYED IT. PLEASE FEEL FREE TO CONTACT ME IF YOU HAVE ANY QUESTIONS OR SUGGESTIONS. THANK YOU

[linkedIn](https://www.linkedin.com/in/rashed-qazizada-1b64b68a/)
