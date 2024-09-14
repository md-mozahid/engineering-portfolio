const projectList = [
  {
    id: 1,
    title: "Bangladesh Warehouse",
    client: "Repkon - Machine and Tool Industry and Trade Inc",
    location: "Gazipur, Bangladesh",
    weight: "515",
    area: "61,300",
    status: "Ongoing",
    thumbnail: "https://i.postimg.cc/43Z51PJ7/BOF6.png",
    images: [
      "https://i.postimg.cc/43Z51PJ7/BOF6.png",
      "https://i.postimg.cc/ryQTxwTc/BOF2.png",
      "https://i.postimg.cc/BbYG0Mpt/BOF3.png",
      "https://i.postimg.cc/ydTHfVSm/BOF4.png",
      "https://i.postimg.cc/sDxrcCfW/BOF5.png",
    ],
  },
  {
    id: 2,
    title: "WAREHOUSE BUILDING",
    client: "S.Alam Group",
    location: "Chottogram, Bangladesh",
    weight: "250",
    area: "11,000",
    status: "Completed",
    thumbnail: "https://i.postimg.cc/RCfL22N6/WH1a.png",
    images: [
      "https://i.postimg.cc/Jh2QWLNJ/WH1.png",
      "https://i.postimg.cc/vmBvjBVb/WH2.png",
      "https://i.postimg.cc/x1gRtHq6/WH3.png",
      "https://i.postimg.cc/0y9nYZ56/WH4.png",
    ],
  },
  {
    id: 3,
    title: "CHEMICAL GODOWN",
    client: "S.Alam Group",
    location: "Chottogram, Bangladesh",
    weight: "560",
    area: "26,900",
    status: "Completed",
    thumbnail: "https://i.postimg.cc/HxMbD7sD/CH1.png",
    images: [
      "https://i.postimg.cc/HxMbD7sD/CH1.png",
      "https://i.postimg.cc/prtz2Xp9/CH2.png",
      "https://i.postimg.cc/FK80BxvV/CH3.png",
      "https://i.postimg.cc/rpKSjPBp/CH4.png",
      "https://i.postimg.cc/XqcFXSCs/CH5.png",
    ],
  },
  {
    id: 4,
    title: "Akij Soap Factory",
    client: "Akij Group",
    location: "Gazipur, Bangladesh",
    weight: "665",
    area: "6230",
    status: "Completed",
    thumbnail: "https://i.postimg.cc/ZKsTtKsj/AKIS1.png",
    images: [
      "https://i.postimg.cc/ZKsTtKsj/AKIS1.png",
      "https://i.postimg.cc/y6P1jTFM/AKIS2.png",
      "https://i.postimg.cc/RVZMDndN/AKIS3.png",
      "https://i.postimg.cc/HkJTpDfm/AKIS4.png",
    ],
  },
  {
    id: 5,
    title: "Jar Making Plant",
    client: "S.Alam Group",
    location: "Chottogram, Bangladesh",
    weight: "1,725",
    area: "1,05,000",
    status: "Ongoing",
    thumbnail: "https://i.postimg.cc/bvxcJzg7/JMP1.png",
    images: [
      "https://i.postimg.cc/bvxcJzg7/JMP1.png",
      "https://i.postimg.cc/9Mc3wvNr/JMP2.png",
      "https://i.postimg.cc/QdWZ2gTx/JMP3.png",
      "https://i.postimg.cc/Qtm2Q0RS/JMP33.png",
      "https://i.postimg.cc/cJyG0KR7/JMP4.png",
    ],
  },
  {
    id: 6,
    title: "NRG Printing & Packaging Godown",
    client: "NRG Group",
    location: "Valuka, Mymensingh, Bangladesh",
    weight: "246",
    area: "36,000",
    status: "Completed",
    thumbnail: "https://i.postimg.cc/MpBgPWCn/NRG1.png",
    images: [
      "https://i.postimg.cc/MpBgPWCn/NRG1.png",
      "https://i.postimg.cc/dtpzj7xM/NRG2.png",
      "https://i.postimg.cc/8Pj2vdwB/NRG3.png",
      "https://i.postimg.cc/c19q6k7L/NRG4.png",
    ],
  },
  {
    id: 7,
    title: "Water Treatment Plant",
    client: "S.Alam Group",
    location: "Chottogram, Bangladesh",
    weight: "22.5",
    area: "3,450",
    status: "Completed",
    thumbnail: "https://i.postimg.cc/tgtwbBCy/WTP1.png",
    images: [
      "https://i.postimg.cc/tgtwbBCy/WTP1.png",
      "https://i.postimg.cc/rpL37BTQ/WTP2.png",
    ],
  },

  {
    id: 8,
    title: "BBT BRIDGE",
    client: "S.Alam Group",
    location: "Chottogram, Bangladesh",
    weight: 58,
    status: "Completed",
    thumbnail: "https://i.ibb.co.com/7z5Z7QZ/1.png",
    images: [
      "https://i.ibb.co.com/7z5Z7QZ/1.png",
      "https://i.ibb.co.com/JvzHZzT/2.png",
      "https://i.ibb.co.com/JvhjMgj/3.png",
      "https://i.ibb.co.com/RvTmCD0/4.png",
    ],
  },

  {
    id: 9,
    title: "Bonded Warehouse",
    client: "Expo Accessories Ltd.",
    location: "Gazipur, Bangladesh",
    weight: "145",
    area: "12,600",
    status: "Completed",
    thumbnail: "https://i.postimg.cc/5yHsXg1X/BW1.png",
    images: [
      "https://i.postimg.cc/5yHsXg1X/BW1.png",
      "https://i.postimg.cc/KYNqw4J8/BW2.png",
      "https://i.postimg.cc/j5SgbKFQ/BW3.png",
      "https://i.postimg.cc/DZpCfHVV/BW4.png",
    ],
  },
  {
    id: 10,
    title: "Main Production Building",
    client: "Expo Accessories Ltd.",
    location: "Gazipur, Bangladesh",
    weight: "225",
    area: "47,800",
    status: "Completed",
    thumbnail: "https://i.postimg.cc/y8CZRjBw/EMB1.png",
    images: [
      "https://i.postimg.cc/y8CZRjBw/EMB1.png",
      "https://i.postimg.cc/SKyYTKnd/EMB2.png",
      "https://i.postimg.cc/jq9NxK1q/EMB3.png",
      "https://i.postimg.cc/gkZhrQ9V/EMB4.png",
      "https://i.postimg.cc/cL78B3L6/EMB5.png",
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
