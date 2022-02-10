module.exports = {
   // db: 'mongodb://localhost:27017/EmployeeDB'
   db: `mongodb+srv://mohit:${process.env.MONGO_ATLAS_PWD}@cluster0.nie5u.mongodb.net/EmployeeDB?retryWrites=true&w=majority`
};