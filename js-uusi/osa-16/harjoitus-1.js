function loadSettings() {
    try {
        const raw = localStorage.getItem("settings");

        if (!raw) {
            return defaultSettings();
        }
        const settings = JSON.parse(raw);

        if (typeof settings === "object" && Array.isArray(settings?.lista)) {
            render(settings.lista);
        }
    } catch(erorr) {
        console.error(`Asetusten jäsentäminen epäonnistui: ${error}`);
        return defaultSettings();
    }
}
