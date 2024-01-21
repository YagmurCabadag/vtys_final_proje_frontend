export const userRoutes = [
  {
    icon: "ic:baseline-home",
    title: "Ana Sayfa",
    children: [
      {
        path: "/user/profile",
        name: "Profilim",
        icon: "mdi:account",
      },
    ],
  },
  {
    title: "Takım Yönetimi",
    icon: "ic:baseline-group",
    children: [
      {
        path: "/teams/create-team",
        name: "Takım Oluştur",
        icon: "ph:users-four-fill",
      },
      {
        path: "/teams/get-user-team",
        name: "Takımım",
        icon: "mdi:account-group",
      },
      {
        path: "/teams/add-member",
        name: "Takıma Üye Ekle",
        icon: "mdi:account-plus",
      },
    ],
  },
  {
    title: "Proje Yönetimi",
    icon: "ic:baseline-group",
    children: [
      {
        path: "/projects/get-team-project",
        name: "Projelerim",
        icon: "ant-design:project-filled",
      },
      {
        path: "/projects/add-project",
        name: "Proje Ekle",
        icon: "material-symbols:add",
      },
    ],
  },
  {
    title: "İş Yönetimi",
    icon: "ic:baseline-group",
    children: [
      {
        path: "/tasks/get-team-task",
        name: "Takım Görevleri",
        icon: "fa-solid:tasks",
      },
      {
        path: "/tasks/add-task",
        name: "Takıma Görev Ekle",
        icon: "carbon:task-add",
      },
    ],
  },
];

export const footerRoutes = [
  {
    path: "/logout",
    icon: "mdi:logout",
    name: "Çıkış Yap",
  },
];
