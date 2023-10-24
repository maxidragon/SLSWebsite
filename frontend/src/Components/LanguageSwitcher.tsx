import { Box } from '@mui/material';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const isEn = i18n.language === "en";
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        i18n.language = lng;
        localStorage.setItem("slsLng", lng);
        window.location.reload();
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box
                onClick={() => {
                    changeLanguage("en");
                }}
                sx={{ marginRight: "1em", cursor: "pointer" }}
                title="English"
            >
                <ReactCountryFlag
                    className="emojiFlag"
                    countryCode="US"
                    style={{
                        fontSize: "2.5em",
                        opacity: !isEn ? "0.5" : "1",
                    }}
                />
            </Box>
            <Box
                onClick={() => {
                    changeLanguage("pl");
                }}
                sx={{ marginRight: "1em", cursor: "pointer" }}
                title="Polski"
            >
                <ReactCountryFlag
                    className="emojiFlag"
                    countryCode="PL"
                    style={{
                        fontSize: "2.5em",
                        opacity: isEn ? "0.5" : "1",
                    }}
                />
            </Box>
        </Box>
    );
}

export default LanguageSwitcher;