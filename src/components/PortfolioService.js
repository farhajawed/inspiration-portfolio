import projectList from "./Projects.json";

let projects = projectList;

export default class PortfolioService {
    static findProjectById = (id) =>
        projects.find(project=>project.id === id)
}