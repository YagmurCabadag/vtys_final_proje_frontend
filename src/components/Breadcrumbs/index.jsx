import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export const DynamicBreadcrumbs = ({ breadcrumbs }) => {
  const router = useRouter();
  const pathnames = router.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link href="/">Anasayfa</Link>
      ) : (
        <Typography color="text.primary">Anasayfa</Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const currentBreadcrumb = breadcrumbs.find((b) => b.path === routeTo);

        if (!currentBreadcrumb) {
          return null;
        }

        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography color="#392476" key={name}>
            {currentBreadcrumb.name}
          </Typography>
        ) : (
          <Typography color="inherit" key={name}>
            {currentBreadcrumb.name}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};
