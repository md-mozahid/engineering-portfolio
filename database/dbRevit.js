const revitDrawing = [
  {
    id: 1,
    title: "Six Storied Residential Building",
    client: "N/A",
    location: "Feni, Bangladesh",
    area: "1050 X 6 = 6,300",
    status: "Ongoing",
    thumbnail: "https://i.postimg.cc/QCrggBFb/1.png",
    images: [
      "https://i.postimg.cc/QCrggBFb/1.png",
      "https://i.postimg.cc/LsnVmFdz/2.png",
      "https://i.postimg.cc/BnhgWQzS/3.png",
      "https://i.postimg.cc/Gm3QSsqg/4.png",
      "https://i.postimg.cc/6Qgf3bwF/5.png",
      "https://i.postimg.cc/Y9FfmNC0/6.png",
    ],
  },
  {
    id: 2,
    title: "Artillery Shell Office Building",
    client: "Bangladesh Army.",
    location: "Gazipur, Bangladesh",
    area: "3800",
    status: "Ongoing",
    thumbnail: "https://i.postimg.cc/gJvxmxrf/1.png",
    images: [
      "https://i.postimg.cc/gJvxmxrf/1.png",
      "https://i.postimg.cc/0QgzTY5Y/2.png",
      "https://i.postimg.cc/4y2Xpcd7/3.jpg",
      "https://i.postimg.cc/6qp97c9x/4.jpg",
      "https://i.postimg.cc/1RvmkkHm/5.jpg",
    ],
  },
];

export const getRevitDrawings = () => {
  return revitDrawing;
};

export const getSingleRevitProject = (id) => {
  const filteredProject = revitDrawing.filter((project) => project?.id == id);
  return filteredProject;
};
