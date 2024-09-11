import {
  WH1,
  WH2,
  WH3,
  BBT1,
  BBT2,
  BBT3,
  BBT4,
  CG1,
  CG2,
  CG3,
  CG4,
  CG5,
} from "@/components/ProjectsImages";

const projectList = [
  {
    id: 1,
    title: "WAREHOUSE BUILDING",
    client: "client",
    location: "location",
    weight: 250,
    status: "ongoing",
    thumbnail: "https://i.ibb.co.com/bdDj701/1.png",
    images: [
      "https://i.ibb.co.com/bdDj701/1.png",
      "https://i.ibb.co.com/PTHWBGp/2.png",
      "https://i.ibb.co.com/gg8GnLr/3.png",
    ],
  },
  {
    id: 2,
    title: "BBT BRIDGE",
    client: "client",
    location: "location",
    weight: 58,
    status: "ongoing",
    thumbnail: "https://i.ibb.co.com/7z5Z7QZ/1.png",
    images: [
      "https://i.ibb.co.com/7z5Z7QZ/1.png",
      "https://i.ibb.co.com/JvzHZzT/2.png",
      "https://i.ibb.co.com/JvhjMgj/3.png",
      "https://i.ibb.co.com/RvTmCD0/4.png",
    ],
  },
  {
    id: 3,
    title: "CHEMICAL GODOWN",
    client: "client",
    location: "location",
    weight: 560,
    status: "ongoing",
    thumbnail: "https://i.ibb.co.com/DGCYZW9/1.png",
    images: [
      "https://i.ibb.co.com/DGCYZW9/1.png",
      "https://i.ibb.co.com/QcPHtc6/2.png",
      "https://i.ibb.co.com/xF7dJht/3.png",
      " https://i.ibb.co.com/LdGmV4z/4.png",
      "https://i.ibb.co.com/t25gsFc/5.png",
    ],
  },
];

export const getProjects = () => {
  return projectList;
};

export const getSingleProject = (id) => {
  const filteredProject = projectList.filter((project) => project?.id == id);
  return filteredProject;
};
