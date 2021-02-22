const { sql, poolPromise } = require("../../database/db");
const fs = require("fs");
var rawdata = fs.readFileSync("./controller/sales/salesQueries.json");

exports.userMaster = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("action", sql.VarChar, "GET")
      .execute("UserMaster");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
    console.log(error);
  }
};

exports.getModule = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().execute("getModule");
    res.json(result.recordset);
  } catch (error) {
    res.send(error.message);
  }
};

exports.getScreen = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("MOD_CODE", sql.Int, req.query.moduleNo)
      .execute("getScreen");
    res.json(result.recordset);
  } catch (error) {
    res.error(error.message);
  }
};

exports.userRight = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("UR_UM_CODE", sql.Int, req.body.UR_UM_CODE)
      .input("UR_SM_CODE", sql.Int, req.body.UR_SM_CODE)
      .input("UR_RIGHTS", sql.VarChar, req.body.UR_RIGHTS)
      .input("PROCESS", sql.VarChar, req.body.PROCESS)
      .input("MOD_CODE", sql.Int, req.body.MOD_CODE)
      .execute("userRight");
    res.json(result.recordset);
  } catch (error) {
    res.json(error);
  }
};

exports.insertUserRights = async (req, res) => {
  try {
    const pool = await poolPromise;
    for (let data of req.body) {
      const result = await pool
        .request()
        .input("UR_UM_CODE", sql.VarChar, data.UR_UM_CODE)
        .input("UR_SM_CODE", sql.Int, data.UR_SM_CODE)
        .input("UR_RIGHTS", sql.VarChar, data.UR_RIGHTS)
        .input("PROCESS", sql.VarChar, data.PROCESS)
        .input("MOD_CODE", sql.Int, data.MOD_CODE)
        .execute("userRight");
    }
    console.warn(result);
    res.json({ message: "created Successfully" });
  } catch (error) {
    res.json(error);
  }
};
