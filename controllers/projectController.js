import Project from "../Models/Project.js";
import { all_tags } from "../utils/all_tags.js";

//Add New Project
export const addProject = async(req,res) => {
    const project = await Project.create(req.body);
    res.status(201).json({msg:"project created!"});
}

//Update Existing Project
export const updateProject = async (req,res) => {
    const {id} = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body);
    if(!project) {
        return res.status(404).json({msg:"project corresponding to provided id not found!"});
    }
    res.status(200).json({msg:"project data updated!"});
}

//Delete Existing Project
export const deleteProject = async (req,res) => {
    const {id} = req.params;
    const project = await Project.findByIdAndDelete(id);
    if(!project) {
        return res.status(404).json({msg:"project corresponding to provided id not found!"});
    }
    res.status(200).json({msg:"project deleted!"});
}

//List All Projects
export const listAllProjects = async (req,res) => {
    const projects = await Project.find({});
    res.status(200).json({projects});
}

//Get Projects for a tag
export const getTagProjects = async (req,res) => {
    const {tag} = req.params;
    const validTag = all_tags.includes(tag);
    if(!validTag){
        return res.status(404).json({msg:"invalid tag provided!"});
    }
    const projects = await Project.find({tags:tag})
    res.status(200).json({projects})
}