const { blogService } = require("../services");

const Blogpage = async (req, res) => {
  try {
    const blog = await blogService.listBlog();
    res.render('index',
      { blog })

  } catch (error) {

  }
}

const createBlog = async (req, res) => {
  try {
    const reqBody = req.body

    if (req.file) {
      reqBody.Image = req.file.filename;
    } else {
      throw new Error("Blog image is required!");
    }

    const blog = await blogService.createBlog(reqBody);
    if (!blog) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("blogs Successfully Create"),
      data: { blog }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


const listBlog = async (req, res) => {
  try {

    const blog = await blogService.listBlog();
    if (!blog) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("blogs Successfully Create"),
      data: { blog }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await blogService.listBlog()
    let blog_id = blog.map((item) => { return item.id })
    let data = blog_id.find((item) => { return item === id.toString() })
    if (!data) { return res.status(404).json("Not Found") }
    if (!id) {
      throw new Error("Please provide userId")
    }
    await blogService.deleteBlog(id)

    res.status(200).json({
      success: true,
      message: "blog successfully deleted",
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
};

const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await blogService.getId(id);
    if (!blog) {
      throw new Error("Blog not found!")
    }
    await blogService.updateBlog(id, req.body)
    res.status(200).json({
      success: true,
      message: "blog Successfully Updated",
      data: { blog }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}


module.exports = { createBlog, listBlog, deleteBlog, updateBlog, Blogpage };

