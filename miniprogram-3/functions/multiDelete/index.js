// 云函数入口文件
const cloud = require('wx-server-sdk')
//批量删除数据库 未完成
cloud.init()
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
    // try {
        console.log(event)
        const result=await db.collection(event.database).where(event.where).remove()
    // }catch(e) {
    //     console.error(e)
    // }
        return result
}