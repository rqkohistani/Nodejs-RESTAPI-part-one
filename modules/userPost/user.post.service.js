import fs from 'fs';
import { faker } from '@faker-js/faker';
import defaultData from '../../dataBaseJson/default.data.json';

const getPostByUserId = async (userId) => {
  const user = defaultData.userDataLists.find((user) => user.id === userId);
  if (user) {
    return user.posts;
  }
  return [];
};

const deletePost = async (userId, postId) => { 
  const user = defaultData.userDataLists.find((user) => user.id === userId);
  if (user) {
    const data = fs.readFileSync('./dataBaseJson/default.data.json');
    const users = JSON.parse(data);
    const newUserData = users.userDataLists.map((user) => {
      if (user.id === userId) {
        const newPosts = user.posts.filter((post) => post.id !== postId);
        return {
          id: user.id,
          ...user,
          posts: newPosts,
          updatedAt: new Date().toISOString(),
        };
      }
      return user;
    });
    fs.writeFileSync(
      './dataBaseJson/default.data.json',
      JSON.stringify({ adminsAndUsersLists: [...defaultData.adminsAndUsersLists], userDataLists: newUserData })
    );
    return user;
  }
  return user;
};

const updatePost = async (userId, postId, postData) => {
  const user = defaultData.userDataLists.find((user) => user.id === userId);
  if (user) {
    const data = fs.readFileSync('./dataBaseJson/default.data.json');
    const users = JSON.parse(data);
    const newUserData = users.userDataLists.map((user) => {
      if (user.id === userId) { 
        const newPosts = user.posts.map((post) => {
          if (post.id === postId) {
            return {
              id: post.id,
              ...post,
              ...postData,
              updatedAt: new Date().toISOString(),
            };
          }
          return post;
        });
        return {
          id: user.id,
          ...user,
          posts: newPosts,
          updatedAt: new Date().toISOString(),
        };

      }
      return user;
    });
    fs.writeFileSync(
      './dataBaseJson/default.data.json',
      JSON.stringify({ adminsAndUsersLists: [...defaultData.adminsAndUsersLists], userDataLists: newUserData })
    );
    return user;
  }
  return user;
};

// create a function that differentiates between the two createPostByFaker and createPost. if the data is empty, call the createPostByFaker function and if the data is not empty, call the createPost function
const createPostByFakerOrPostReqBody = async (userId, postData=false) => {
  if (postData) {
    return createPostByReqBody(userId, postData);
  }
  return createPostByFaker(userId);
};



const createPostByFaker = async (userId) => {
  const user = defaultData.userDataLists.find((user) => user.id === userId);
  if (user) {
    const data = fs.readFileSync('./dataBaseJson/default.data.json');
    const users = JSON.parse(data);
    const newUserData = users.userDataLists.map((user) => {
      if (user.id === userId) {
        const newPost = {
          id: Math.floor(Math.random() * 1000000),
          title: faker.lorem.sentence(),
          body: faker.lorem.paragraph(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        return {
          ...user,
          posts: [...user.posts, newPost],
        };
      }
      return user;
    });
    fs.writeFileSync(
      './dataBaseJson/default.data.json',
      JSON.stringify({ adminsAndUsersLists: [...defaultData.adminsAndUsersLists], userDataLists: newUserData })
    );
    return newUserData.find((user) => user.id === userId);
  }
  return user; // return null if user not found
};
const createPostByReqBody = async (userId, postData) => {
  const user = defaultData.userDataLists.find((user) => user.id === userId);
  if (user) {
    const data = fs.readFileSync('./dataBaseJson/default.data.json');
    const users = JSON.parse(data);
    const newUserData = users.userDataLists.map((user) => {
      if (user.id === userId) {
        const newPost = {
          id: Math.floor(Math.random() * 1000000),
          ...postData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        return {
          ...user,
          posts: [...user.posts, newPost],
        };
      }
      return user;
    });
    fs.writeFileSync(
      './dataBaseJson/default.data.json',
      JSON.stringify({ adminsAndUsersLists: [...defaultData.adminsAndUsersLists], userDataLists: newUserData })
    );
    return newUserData.find((user) => user.id === userId);
  }
  return user; // return null if user not found
};

const userPostService = {
  createPostByFakerOrPostReqBody,
  getPostByUserId,
  deletePost,
  updatePost,
};

export default userPostService;
