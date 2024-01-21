import { dateFormatter } from "@/libs/helper/DateConverter";
import { Typography } from "@mui/material";

export const userProjectColumn = [
  {
    minWidth: 300,
    field: "title",
    headerName: "Proje Adı",
    renderCell: (params) => {
      return (
        <Typography variant="body2" color="text.secondary">
          {params.row.name}
        </Typography>
      );
    },
  },
  {
    minWidth: 300,
    field: "description",
    headerName: "Proje Açıklaması",
    renderCell: (params) => {
      return (
        <Typography variant="body2" color="text.secondary">
          {params.row.description}
        </Typography>
      );
    },
  },
  {
    minWidth: 300,
    field: "createdAt",
    headerName: "Proje Oluşturulma Tarihi",
    renderCell: (params) => {
      return (
        <Typography variant="body2" color="text.secondary">
          {dateFormatter.momentFormatterWithHours(params.row.createdAt)}
        </Typography>
      );
    },
  },
];
