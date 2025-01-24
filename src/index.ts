import "tsconfig-paths/register";
import app from "@/app";
import Logger from "@/utils/logger";

const PORT = 3000;

app.listen(PORT, () => {
    Logger.info(`Server is running on http://localhost:${PORT}`);
});
