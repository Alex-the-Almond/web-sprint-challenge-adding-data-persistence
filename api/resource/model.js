const db = require('../../data/dbConfig');

function getResources() {
 return db('resources')
 }

 async function addResource(resource) {
    const resourceId = await db('resources').insert(resource)
    return db('resources').where('resource_id', resourceId[0]).first();    
  }

module.exports = {
  getResources,
  addResource 
  }