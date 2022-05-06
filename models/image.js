module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define(
    'Image',
    {
      // id 가 기본으로 들어있다.
      src: {
        type: Sequelize.STRING(200),
        allowNull: false, // 필수
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 이모티콘 호환
    }
  );

  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };

  return Image;
};
