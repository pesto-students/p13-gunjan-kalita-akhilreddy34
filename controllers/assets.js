const DB_CONNECTION = require("../config/DB");

const getAllAssetsOfSingleUser = (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send("id is invalid");
    const query = `select * from assets where userId=${id}`;
    DB_CONNECTION.query(query, (error, result) => {
      if (error) throw error;
      return res.status(200).send(result);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const editAsset = (req, res) => {
  try {
    const { assetId } = req.params;
    const editData = req?.body;
    const countOfFieldsToEdit = Object.values(editData).length;
    let currentField = 0;

    if (!assetId) return res.status(400).send("id is invalid");
    if (!countOfFieldsToEdit)
      return res.status(400).send("edit data cant be empty");

    let query = `UPDATE assets SET `;

    for (key in editData) {
      currentField = currentField + 1;
      const value = key != "value" ? `'${editData[key]}'` : editData[key];
      if (countOfFieldsToEdit != currentField)
        query = query + `${key}=${value},`;
      else query = query + `${key}=${value}`;
    }

    query = query + ` WHERE id = ${+assetId};`;

    DB_CONNECTION.query(query, (error, result) => {
      if (error) throw error;
      return res.status(200).send(result);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteAsset = (req, res) => {
  try {
    const { assetId } = req.params;
    if (!assetId) return res.status(400).send("id is invalid");
    const query = `DELETE FROM assets WHERE id=${+assetId};`;
    DB_CONNECTION.query(query, (error, result) => {
      if (error) throw error;
      return res.status(200).send(result);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const createNewAsset = (req, res) => {
  try {
    const addData = req?.body;

    if (
      !addData?.assetName ||
      !addData?.value ||
      !addData?.assetType ||
      !addData?.userId
    )
      return res.status(400).send("please provide valid input");
    const query = `INSERT INTO assets (userId, assetType, assetName, value) VALUES (${addData.userId}, '${addData.assetType}', '${addData.assetName}', ${addData.value})`;
    DB_CONNECTION.query(query, (error, result) => {
      if (error) throw error;
      return res.status(200).send(result);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  getAllAssetsOfSingleUser,
  editAsset,
  deleteAsset,
  createNewAsset,
};
