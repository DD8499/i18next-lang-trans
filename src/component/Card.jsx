import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

export default function MuiCard() {
  const { t } = useTranslation();
  const number_of_days = 5;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {t("app_title")}
        </Typography>
        <Typography variant="h5" component="div">
          {t("days_since_release", { number_of_days })}
        </Typography>
      </CardContent>
    </Card>
  );
}
