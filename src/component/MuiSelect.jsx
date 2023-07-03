import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const MuiSelect = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(Cookies.get("i18next") || "en");

  const handleLangChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setLang(event.target.value);
  };
  console.log(i18n, "i18n");
  const languages = [
    { lan: "English", val: "en" },
    { lan: "Français", val: "fr" },
    { lan: "عربي", val: "ar" },
  ];

  return (
    <Box sx={{ minWidth: 420 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{t("language")}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label={t("language")}
          onChange={handleLangChange}
        >
          {languages?.map((lan) => (
            <MenuItem value={lan?.val} disabled={lan?.val === lang}>
              {lan?.lan}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MuiSelect;
