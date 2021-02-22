const { sql, poolPromise } = require("../database/db");

exports.setResetModify = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("TableName", sql.VarChar, req.body.TableName)
      .input("ModField", sql.VarChar, req.body.ModField)
      .input("CodeField", sql.VarChar, req.body.codeField)
      .input("CodeVal", sql.Int, req.body.codeVal)
      .input("MODIFY", sql.VarChar, req.body.MODIFY.toString())
      .input("process", sql.VarChar, req.body.process)
      .output("PK_CODE", sql.Numeric)
      .output("ERROR", sql.VarChar)
      .execute("Modify_Lock");

    if (req.body.process == "check") {
      res.json(result.recordset.length);
    } else {
      res.json(result);
    }
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: error.message });
  }
};

exports.deleteRow = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("PK_CODE", sql.VarChar, req.body.PK_CODE)
      .input("PK_Field", sql.VarChar, req.body.PK_FIELD)
      .input("ES_DELETE", sql.VarChar, req.body.ES_DELETE)
      .input("DELETE", sql.VarChar, req.body.DELETE)
      .input("TABLE_NAME", sql.VarChar, req.body.TABLE_NAME)
      .execute("SP_CM_DELETE");
    res.json(result);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: error.message });
  }
};

exports.SP_CM_FillCombo = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("TableNames", sql.VarChar, req.body.TableNames)
      .input("fieldNames", sql.VarChar, req.body.fieldNames)
      .input("condition", sql.VarChar, req.body.condition)
      .execute("SP_CM_FillCombo");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: error.message });
  }
};
