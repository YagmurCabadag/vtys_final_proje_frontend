import { Breadcrumbs, Grid, Typography } from "@mui/material";
import React from "react";
import CardComponent from "../Card";
import Link from "next/link";
import { useRouter } from "next/router";

const PageTitle = ({ breadcrumbs }) => {
  const router = useRouter();
  const pathnames = router.pathname.split("/").filter((x) => x);
  return (
    <Grid item xs={12}>
      <CardComponent
        className="
                w-full
                mx-auto
                p-10
                shadow-lg
                rounded-md
                text-gray-800
            "
      >
        <Typography variant="h5" component="h5">
          <Breadcrumbs aria-label="breadcrumb">
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const currentBreadcrumb = breadcrumbs.find(
                (b) => b.path === routeTo
              );

              if (!currentBreadcrumb) {
                return null;
              }

              const isLast = index === pathnames.length - 1;

              return (
                isLast && (
                  <Typography
                    color="MenuText"
                    key={name}
                    sx={{
                      textTransform: "capitalize",
                      color: "#392467",
                      letterSpacing: "1px",
                    }}
                  >
                    {currentBreadcrumb.name}
                  </Typography>
                )
              );
            })}
          </Breadcrumbs>
        </Typography>
      </CardComponent>
    </Grid>
  );
};

export default PageTitle;
