import {Router} from "express";
import { addProject, deleteProject, getTagProjects, listAllProjects, updateProject } from "../controllers/projectController.js";
import { authorizePermission } from "../Middlewares/authorizePermission.js";
const router = Router();

router.route("/add").post(authorizePermission("client"),addProject);
router.route("/update/:id").patch(authorizePermission("client"),updateProject);
router.route("/delete/:id").delete(authorizePermission("client"),deleteProject);
router.route("/all-projects").get(listAllProjects);
router.route("/tags/:tag").get(getTagProjects);

export default router;