module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'User',
    {
      // id 가 기본으로 들어있다.
      email: {
        type: Sequelize.STRING(30),
        unique: true,
        allowNull: false, // 필수
      },
      nickname: {
        type: Sequelize.STRING(30),
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글저장
    }
  );

  User.associate = (db) => {
    db.User.hasMany(db.Post); // 한명의 유저가 많은 글을 가질수있다.
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' }); // 사용자 게시글 좋아요! 관계
    db.User.belongsToMany(db.User, {
      through: 'Follow',
      as: 'Follower',
      foreignKey: 'FollowingId',
    });
    db.User.belongsToMany(db.User, {
      through: 'Follow',
      as: 'Following',
      foreignKey: 'FollowerId',
    });
  };

  return User;
};
