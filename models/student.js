module.exports = (sequelize, DataTypes) => {                // fixed a typo, before it said modeule.exports = (sequelize, DataTypes) => {

    let Student = sequelize.define('Student', {

        name: {
            type: DataTypes.STRING,
            allowNull: false        // spelling of ' allowNull ' must be exact
        },

        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    // force specifies whether to drop the table or not
    // true = drop table every time app restarts. Need this setting if table schema changed.
    // false = keep table                   // changes     Student.sync( {force: true }).then( () => { to     Student.sync( {force: false }).then( () => {
    Student.sync( {force: false }).then( () => {                        
        console.log('Synced student table')
    })

    return Student
    // this comment is a test
}