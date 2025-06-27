import Course from "../model/cources.model.js";
import { v2 as cloudinary } from 'cloudinary';
import { Purchase } from "../model/purchase.model.js";


export const getcource = async(req,res)=>{
    try {
        const course = await Course.find()
          res.status(200).json(course)
    } catch (error) {
        console.log("error: ",error);
        res.status(500).json(error);
    }
}
// for admins to create cources 
export const createcourse = async (req, res) => {
  
  const { title, description, price } = req.body;
  console.log(title, description, price);

  try {
    if (!title || !description || !price) {
      return res.status(400).json({ errors: "All fields are required" });
    }
    const { image } = req.files;
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ errors: "No file uploaded" });
    }

    const allowedFormat = ["image/png", "image/jpeg"];
    if (!allowedFormat.includes(image.mimetype)) {
      return res
        .status(400)
        .json({ errors: "Invalid file format. Only PNG and JPG are allowed" });
    }

    // claudinary code
    const cloud_response = await cloudinary.uploader.upload(image.tempFilePath);
    if (!cloud_response || cloud_response.error) {
      return res
        .status(400)
        .json({ errors: "Error uploading file to cloudinary" });
    }

    const courseData = {
      title,
      description,
      price,
      image: {
        public_id: cloud_response.public_id,
        url: cloud_response.url,
      }
    };
    const course = await Course.create(courseData);
    res.json({
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error creating course" });
  }
};


// update the courses 

export const  updatecourse = async (req, res)=>{
 const {courseId} = req.params; 
 const { title , price , description} = req.body;
 const image = req.files?.image;

 try {
  if (!image) {
      return res.status(400).json({ errors: "No image file uploaded" });
    }

    const cloud_response = await cloudinary.uploader.upload(image.tempFilePath);
    if (!cloud_response || cloud_response.error) {
      return res.status(400).json({ errors: "Error uploading file to cloudinary" });
    }
  const course = await Course.updateOne({
    _id: courseId,


  } ,{
    title,
      description,
      price,
      image: {
        public_id: cloud_response.public_id,
        url: cloud_response.url,
      }
  } )
  res.status(200).json({message:"updated successfully"})
 } catch (error) {
  res.status(500).json({message:"error "})
  console.log("error in course updation", error)
 }
};

export const deletecourse = async(req, res)=>{
   const { courseId}= req.params
   try {
    const course = await Course.findOneAndDelete({
      _id : courseId
    });
    if(!course){
      res.status(404).json({message:"no such course exist"});
    }
    res.status(200).json({message:"course deleted successfully"})
   } catch (error) {
    console.log("error: ",error)
   }
};


export const coursedetail = async(req,res)=>{
try {
    const { courseId}= req.params;
  const course = await Course.findOne(courseId);
  res.status(200).json({message:"course details displayed by ID " , course})
} catch (error) {
  console.log("error: " ,error);
  res.status(500).json({message:"course details cant display" , error})
}
}

export const buyCourse = async (req, res) => {
  const { userId } = req;  
  const { courseId } = req.params;
   console.log(courseId)
  try {
  const course = await Course.findById(courseId); // ✅ CORRECT

    if (!course) {
      return res.status(404).json({ message: "Course not found" }); 
    }

    const existingPurchase = await Purchase.findOne({ userId, courseId });

    if (existingPurchase) {
      return res.status(400).json({ message: "Course already purchased" }); 
    }

    const newPurchase = new Purchase({ userId, courseId });
    await newPurchase.save();

    res.status(202).json({ message: "Course purchased successfully" , newPurchase});
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ message: "Internal server error" }); 
  }
};

