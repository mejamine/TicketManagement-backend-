const config=require('../config/config');
const mongoose=require('mongoose');
const db={};
mongoose.Promise=global.Promise;
mongoose.set('strictQuery',false);
db.mongoose=mongoose;
db.url=config.DB_URL;
db.companies= require('../api/models/COMPANY.model')(mongoose);
db.users= require('../api/models/USER.model')(mongoose);
db.tickets= require('../api/models/TICKET.model')(mongoose);
db.comments= require('../api/models/COMMENT.model')(mongoose);
module.exports=db;