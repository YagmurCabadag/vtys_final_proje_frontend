import { dateFormatter } from "@/libs/helper/DateConverter";

const { Typography } = require("@mui/material");

export const membersColumn = [
  {
    minWidth: 200,
    field: "username",
    headerName: "Kullanıcı Adı",
    renderCell: (params) => {
      return (
        <Typography variant="body2" color="text.secondary">
          {params.row.username}
        </Typography>
      );
    },
  },
  {
    minWidth: 200,
    field: "email",
    headerName: "Email",
    renderCell: (params) => {
      return (
        <Typography variant="body2" color="text.secondary">
          {params.row.email}
        </Typography>
      );
    },
  },
  {
    minWidth: 200,
    field: "createdAt",
    headerName: "Kullanıcı Oluşturulma Tarihi",
    renderCell: (params) => {
      return (
        <Typography variant="body2" color="text.secondary">
          {dateFormatter.momentFormatterWithHours(params.row.createdAt)}
        </Typography>
      );
    },
  },
];
