/*
  Warnings:

  - The primary key for the `Creature` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Creature" DROP CONSTRAINT "Creature_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Creature_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Creature_id_seq";
