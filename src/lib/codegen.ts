#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { capitalizeFirst, checkFileExists } from "./utils";

async function generateFiles() {
  try {
    const projectRoot = process.cwd();
    const schemasDir = path.join(projectRoot, "src", "db", "schemas");
    const modelsDir = path.join(projectRoot, "src", "models");
    const servicesDir = path.join(projectRoot, "src", "services");

    // Ensure directories exist
    await fs.mkdir(modelsDir, { recursive: true });
    await fs.mkdir(servicesDir, { recursive: true });

    // Read all files from schemas directory
    const files = await fs.readdir(schemasDir);

    // Filter out _utils.ts and non-schema files
    const schemaFiles = files.filter(
      (file) => file.endsWith(".schema.ts") && !file.startsWith("_"),
    );

    for (const schemaFile of schemaFiles) {
      const entityName = schemaFile.replace("s.schema.ts", "");
      const tableName = `${entityName}sTable`;

      // Generate model file
      const modelContent = `import { ${tableName} } from "@/db/schemas/${entityName}.schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type ${capitalizeFirst(entityName)} = InferSelectModel<typeof ${tableName}>;
export type ${capitalizeFirst(entityName)}Insert = InferInsertModel<typeof ${tableName}>;
`;

      // Generate service file
      const serviceContent = `import { ${tableName} } from "@/db/schemas/${entityName}.schema";
import { ${capitalizeFirst(entityName)}, ${capitalizeFirst(entityName)}Insert } from "@/models/${entityName}.model";
import { createService } from "../_base";

export const ${entityName}Service = createService<${capitalizeFirst(entityName)}, ${capitalizeFirst(entityName)}Insert>(${tableName});
`;

      // Check and write model file
      const modelPath = path.join(modelsDir, `${entityName}.model.ts`);
      const modelExists = await checkFileExists(modelPath);
      if (modelExists) {
        console.warn(
          `⚠️ Warning: ${entityName} model already exists at ${modelPath}`,
        );
      } else {
        await fs.writeFile(modelPath, modelContent);
        // biome-ignore lint/suspicious/noConsoleLog: <explanation>
        console.log(`Generated model file: ${modelPath}`);
      }

      // Create service directory and check/write service file
      const serviceEntityDir = path.join(servicesDir, entityName);
      await fs.mkdir(serviceEntityDir, { recursive: true });
      const servicePath = path.join(serviceEntityDir, "index.ts");
      const serviceExists = await checkFileExists(servicePath);
      if (serviceExists) {
        console.warn(
          `⚠️ Warning: ${entityName} service already exists at ${servicePath}`,
        );
      } else {
        await fs.writeFile(servicePath, serviceContent);
        // biome-ignore lint/suspicious/noConsoleLog: <explanation>
        console.log(`Generated service file: ${servicePath}`);
      }
    }

    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log("Code generation process completed!");
  } catch (error) {
    console.error("Error generating files:", error);
    process.exit(1);
  }
}

generateFiles();
