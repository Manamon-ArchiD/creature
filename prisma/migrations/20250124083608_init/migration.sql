-- CreateTable
CREATE TABLE "Creature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "attackPoint" INTEGER NOT NULL,
    "defensePoint" INTEGER NOT NULL,
    "rarity" INTEGER NOT NULL,

    CONSTRAINT "Creature_pkey" PRIMARY KEY ("id")
);
