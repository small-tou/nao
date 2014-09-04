module.exports = {
    id: {
        type: "int",
        autoIncrement: true,
        primaryKey: true
    },
    longitude: "double",
    latitude: "double",
    user_id: "int",
    uuid: "varchar(40)",
    title: "varchar(100)",
    content: "text"
}