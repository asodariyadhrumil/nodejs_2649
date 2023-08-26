const { groceryService } = require("../services");

/** create grocery*/
const createGrocery = async (req, res) => {
    try {
        const reqBody = req.body;

        const grocery = await groceryService.createGrocery(reqBody);
        if (!grocery) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "grocery create successfully!",
            data: { grocery },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** list grocery*/
const listGrocery = async (req, res) => {
    try {
        const reqBody = req.body;

        const grocery = await groceryService.listGrocery(reqBody);
        if (!grocery) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "grocery list successfully!",
            data: { grocery },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** create delete*/
const deleteGrocery = async (req, res) => {
    try {
        const id = req.params.Id
        const grocery = await groceryService.listGrocery();
        if (!grocery) {
            throw new Error("Something went wrong, please try again or later!");
        }
        await groceryService.deleteGrocery(id)
        res.status(200).json({
            success: true,
            message: "grocery create successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


module.exports={createGrocery,listGrocery,deleteGrocery}