module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    'Post',
    {
      // id 가 기본으로 들어있다.
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 호환
    }
  );

  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // 게시글은 작성자에게 속해있다.
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // 다:다 관계, 서로 많이 가질 수 있는 관계
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // 사용자 게시글 좋아요! 관계
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsTo(db.Post, { as: 'Retweet' });
  };

  return Post;
};
