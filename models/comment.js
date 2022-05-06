module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define(
    'Comment',
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

  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };

  return Comment;
};
