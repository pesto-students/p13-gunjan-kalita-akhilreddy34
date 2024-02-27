const mongoose = require("mongoose");
const Assest = require("../modals/assets");

const getAllAssetsOfSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send("id is invalid");
    const userAssets = await Assest.find({
      userId: new mongoose.Types.ObjectId(id),
    });
    return res.status(200).send(userAssets);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const editAsset = async (req, res) => {
  try {
    const { assetId } = req.params;
    const editData = req?.body;
    const countOfFieldsToEdit = Object.values(editData).length;

    if (!assetId) return res.status(400).send("id is invalid");
    if (!countOfFieldsToEdit)
      return res.status(400).send("edit data cant be empty");

    const editedData = await Assest.updateOne(
      { _id: new mongoose.Types.ObjectId(assetId) },
      { $set: { ...editData } },
      { new: true }
    );
    return res.status(200).send(true);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteAsset = async (req, res) => {
  try {
    const { assetId } = req.params;
    if (!assetId) return res.status(400).send("id is invalid");

    await Assest.deleteOne({ _id: new mongoose.Types.ObjectId(assetId) });
    return res.status(200).send(true);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const createNewAsset = async (req, res) => {
  try {
    const addData = req?.body;

    if (
      !addData?.assetName ||
      !addData?.value ||
      !addData?.assetType ||
      !addData?.userId
    )
      return res.status(400).send("please provide valid input");

    const newAssest = new Assest({
      value: addData?.value,
      assetType: addData?.assetType,
      userId: new mongoose.Types.ObjectId(addData?.userId),
      assetName: addData?.assetName,
    });
    const assestCreated = await newAssest.save();
    return res.status(200).send(assestCreated);
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
