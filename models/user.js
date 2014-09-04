module.exports = {
    id: {
        type: "int",
        autoIncrement: true,
        primaryKey: true
    },
    nick: "varchar(100)",
    sex: "varchar(10)",
    headpic: "varchar(1000)",
    uid: "varchar(100)",
    access_token: "varchar(100)",
    openid: "varchar(100)",
    location: "varchar(50)",
    login_platform: "varchar(10)",
    uuid: "varchar(50)",
    udid: "varchar(50)",
    birthday: "varchar(50)",
    "favourites_count": "int",
    "followers_count": "int",
    "friends_count": "int"
}