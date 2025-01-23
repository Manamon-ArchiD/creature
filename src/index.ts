import "tsconfig-paths/register";
import app from "@/app";

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger UI is available on http://localhost:${PORT}/api-docs`);
});
