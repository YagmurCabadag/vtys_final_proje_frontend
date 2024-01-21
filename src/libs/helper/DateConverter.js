import moment from "moment";

export const dateFormatter = {
  momentFormatter: (utcDate) => {
    const formattedDate_moment = moment
      .utc(utcDate)
      .local()
      .format("DD-MM-YYYY");

    return formattedDate_moment;
  },

  momentFormatterWithHours: (utcDate) => {
    const formattedDate_moment = moment
      .utc(utcDate)
      .local()
      .format("DD-MM-YYYY HH:mm:ss");

    return formattedDate_moment;
  },

  converterDate: (date) => {
    const dateArray = date.split("/");
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];

    return `${month}/${day}/${year}`;
  },
};
