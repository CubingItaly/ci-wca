import path from "path";
import { exec } from "child_process";

export async function importWCA() {
    exec(path.join(__dirname, "shell_scripts/mysql.sh"), () => null);
}
