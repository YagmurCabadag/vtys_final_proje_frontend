import { dateFormatter } from "@/libs/helper/DateConverter";
import { Badge, Box, Typography } from "@mui/material";

export const questsColumn = [
  {
    minWidth: 200,
    field: "project",
    headerName: "Proje Adı",
    renderCell: (params) => {
      return params.row.project;
    },
  },
  {
    minWidth: 200,
    field: "title",
    headerName: "Görev Başlığı",
    renderCell: (params) => {
      return params.row.title;
    },
  },
  {
    minWidth: 200,
    field: "description",
    headerName: "Görev Açıklaması",
    renderCell: (params) => {
      return params.row.description;
    },
  },
  {
    minWidth: 200,
    field: "assignedTo",
    headerName: "Göreve Atanan Kişi",
    renderCell: (params) => {
      return params.row.assignedTo;
    },
  },
  {
    minWidth: 200,
    field: "createdAt",
    headerName: "Görev Oluşturulma Tarihi",
    renderCell: (params) => {
      return dateFormatter.momentFormatterWithHours(params.row.createdAt);
    },
  },
  {
    minWidth: 200,
    field: "updatedAt",
    headerName: "Görev Güncellenme Tarihi",
    renderCell: (params) => {
      return dateFormatter.momentFormatterWithHours(params.row.updatedAt);
    },
  },
  {
    minWidth: 200,
    field: "endDate",
    headerName: "Görev Bitiş Tarihi",
    renderCell: (params) => {
      return dateFormatter.momentFormatterWithHours(params.row.endDate);
    },
  },
  {
    minWidth: 300,
    field: "delayAmount",
    headerName: "Gecikme Süresi",
    renderCell: (params) => {
      const currentDate = new Date();
      const endDate = new Date(params.row.endDate);
      const updatedAt = new Date(params.row.updatedAt);

      const dayDifference = Math.floor(
        Math.abs((endDate - currentDate) / (1000 * 60 * 60 * 24))
      );
      const hourDifference = Math.floor(
        Math.abs((endDate - currentDate) / (1000 * 60 * 60))
      );

      const delayAmount = Math.max(0, dayDifference);

      return (
        <Typography variant="body2">
          {currentDate > endDate
            ? `${delayAmount} gün gecikti`
            : `Görevin bitmesine ${dayDifference} gün kaldı`}
        </Typography>
      );
    },
  },

  {
    minWidth: 250, // Adjust the minWidth as needed
    field: "status",
    headerName: "Görev Durumu",
    renderCell: (params) => {
      return (
        <Box>
          {params.row.status === "to_be_conducted" ? (
            <div
              className="flex items-center 
            justify-center text-white bg-gray-400 rounded-full p-2"
            >
              <Typography variant="body2">Yapılacak</Typography>
            </div>
          ) : params.row.status === "in_progress" ? (
            <div
              className="flex items-center 
            justify-center text-white bg-yellow-400 rounded-full p-2"
            >
              <Typography variant="body2">Devam Ediyor</Typography>
            </div>
          ) : params.row.status === "completed" ? (
            <div
              className="flex items-center 
            justify-center text-white bg-green-400 rounded-full p-2"
            >
              <Typography variant="body2">Tamamlandı</Typography>
            </div>
          ) : (
            <div
              className="flex items-center 
            justify-center text-white bg-red-400 rounded-full p-2"
            >
              <Typography variant="body2">İptal Edildi</Typography>
            </div>
          )}
        </Box>
      );
    },
  },
];
