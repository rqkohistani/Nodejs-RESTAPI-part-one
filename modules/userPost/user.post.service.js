import fs from 'fs';
import defaultData from '../../dataBaseJson/default.data.json';


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
  return user; // return null if user not found
};


const userPostService = {
  createPost,
};

export default userPostService;
