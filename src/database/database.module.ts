import { Module } from "@nestjs/common";
import { ModelDefinition, MongooseModule } from "@nestjs/mongoose";

@Module({})
export class DatabaseModule {
    static forRoot() {
        return MongooseModule.forRoot(process.env.DB_CONNECTION_STRING, {
            dbName: process.env.DB_NAME,
        });
    }

    static forFeature(models: ModelDefinition[]) {
        return MongooseModule.forFeature(models);
    }
}
