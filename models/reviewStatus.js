module.exports = function (sequelize, DataTypes)
var reviewStatus = sequelize.define("reviewStatus", {
    indexStatus: dataTypes.INTEGER,
    region: dataTypes.STRING,
    medicalCenter: dataTypes.STRING

})