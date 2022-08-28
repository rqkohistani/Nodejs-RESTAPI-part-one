import fs from 'fs';
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
    const dataJson = JSON.parse(data);
    const post = dataJson.userDataLists.find((user) => user.id === userId).posts.find((post) => post.id === postId);
    if (post) {
      dataJson.userDataLists.find((user) => user.id === userId).posts = dataJson.userDataLists
        .find((user) => user.id === userId)
        .posts.filter((post) => post.id !== postId);
      fs.writeFileSync('./dataBaseJson/default.data.json', JSON.stringify(dataJson));
      return post;
    }
    return null;
  }
  return null;
};

const updatePost = async (userId, postId, postData) => {
  const user = defaultData.userDataLists.find((user) => user.id === userId);
  if (user) {
    const data = fs.readFileSync('./dataBaseJson/default.data.json');
    const json = JSON.parse(data);
    const post = json.userDataLists.find((user) => user.id === userId).posts.find((post) => post.id === postId);
    if (post) {
      post.title = postData.title;
      post.body = postData.body;
      post.updatedAt = new Date().toISOString();
      fs.writeFileSync('./dataBaseJson/default.data.json', JSON.stringify(json));
      return post;
    }
    return null;
  }
  return null;
};

const createPost = async (userId, postData) => {
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
  return user;
};

const userPostService = {
  createPost,
  getPostByUserId,
  deletePost,
  updatePost,
};

export default userPostService;
