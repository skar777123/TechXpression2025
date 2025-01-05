-- CreateTable
CREATE TABLE "Hackathon" (
    "id" TEXT NOT NULL,
    "TeamName" TEXT NOT NULL,
    "Leader" TEXT NOT NULL,
    "Number" TEXT NOT NULL,
    "Participant2" TEXT NOT NULL,
    "Participant3" TEXT NOT NULL,
    "Participant4" TEXT NOT NULL,
    "College" TEXT NOT NULL,
    "TransactionId" TEXT NOT NULL,
    "TransactionScreenShot" TEXT NOT NULL DEFAULT '-',
    "Created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hackathon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GvG" (
    "id" TEXT NOT NULL,
    "TeamName" TEXT NOT NULL,
    "Leader" TEXT NOT NULL,
    "Number" TEXT NOT NULL,
    "Participant2" TEXT NOT NULL,
    "Participant3" TEXT NOT NULL,
    "College" TEXT NOT NULL,
    "TransactionId" TEXT NOT NULL,
    "TransactionScreenShot" TEXT NOT NULL DEFAULT '-',
    "Created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GvG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechTH" (
    "id" TEXT NOT NULL,
    "TeamName" TEXT NOT NULL,
    "Leader" TEXT NOT NULL,
    "Number" TEXT NOT NULL,
    "Participant2" TEXT NOT NULL,
    "Participant3" TEXT NOT NULL,
    "Participant4" TEXT NOT NULL,
    "College" TEXT NOT NULL,
    "TransactionId" TEXT NOT NULL,
    "Created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TechTH_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechStar_Unplugged" (
    "id" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "Leader" TEXT NOT NULL,
    "Number" TEXT NOT NULL,
    "Participant2" TEXT NOT NULL DEFAULT '-',
    "Participant3" TEXT NOT NULL DEFAULT '-',
    "Participant4" TEXT NOT NULL DEFAULT '-',
    "College" TEXT NOT NULL,
    "TransactionId" TEXT NOT NULL,
    "Created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TechStar_Unplugged_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aicons" (
    "id" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "Number" TEXT NOT NULL,
    "Participant1" TEXT NOT NULL,
    "Participant2" TEXT NOT NULL DEFAULT '-',
    "College" TEXT NOT NULL,
    "TransactionId" TEXT NOT NULL,
    "Created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aicons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiCF" (
    "id" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "Number" TEXT NOT NULL,
    "Participant1" TEXT NOT NULL,
    "Participant2" TEXT NOT NULL DEFAULT '-',
    "College" TEXT NOT NULL,
    "TransactionId" TEXT NOT NULL,
    "Created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiCF_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "collegeName" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dataSprint" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "Number" TEXT NOT NULL,
    "College" TEXT NOT NULL,
    "TransactionId" TEXT NOT NULL,
    "Created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dataSprint_pkey" PRIMARY KEY ("id")
);
