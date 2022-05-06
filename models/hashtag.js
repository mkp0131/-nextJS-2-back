module.exports = (sequelize, Sequelize) => {
  const Hashtag = sequelize.define(
    'Hashtag',
    {
      // id 가 기본으로 들어있다.
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 호환
    }
  );

  Hashtag.associate = (db) => {
    db.Hashtag.belongsTo(db.User);
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' }); // 다:다 관계, 서로 많이 가질 수 있는 관계
  };

  return Hashtag;
};
