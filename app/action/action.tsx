"use server";

import prisma from "../db/db";

export const HackathonAction = async (
  teamName: string,
  leaderName: string,
  mobileNumber: string,
  secondMember: string,
  thirdMember: string,
  fourthMember: string,
  collegeName: string,
  transactionId: string
) => {
  await prisma.hackathon.create({
    data: {
      TeamName: teamName,
      Leader: leaderName,
      Number: mobileNumber,
      Participant2: secondMember,
      Participant3: thirdMember,
      Participant4: fourthMember,
      College: collegeName,
      TransactionId: transactionId,
    },
  });
};

export const gvgAction = async (
  teamName: string,
  leaderName: string,
  mobileNumber: string,
  secondMember: string,
  thirdMember: string,
  collegeName: string,
  transactionId: string
) => {
  await prisma.gvG.create({
    data: {
      TeamName: teamName,
      Leader: leaderName,
      Number: mobileNumber,
      Participant2: secondMember,
      Participant3: thirdMember,
      College: collegeName,
      TransactionId: transactionId,
    },
  });
};

export const tthAction = async (
  teamName: string,
  leaderName: string,
  mobileNumber: string,
  secondMember: string,
  thirdMember: string,
  fourthMember: string,
  collegeName: string,
  transactionId: string
) => {
  await prisma.techTH.create({
    data: {
      TeamName: teamName,
      Leader: leaderName,
      Number: mobileNumber,
      Participant2: secondMember,
      Participant3: thirdMember,
      Participant4: fourthMember,
      College: collegeName,
      TransactionId: transactionId,
    },
  });
};

export const tsuAction = async (
  type: string,
  leaderName: string,
  mobileNumber: string,
  secondMember: string,
  thirdMember: string,
  fourthMember: string,
  collegeName: string
) => {
  await prisma.techStar_Unplugged.create({
    data: {
      Type: type,
      Leader: leaderName,
      Number: mobileNumber,
      Participant2: secondMember,
      Participant3: thirdMember,
      Participant4: fourthMember,
      College: collegeName,
      TransactionId: "-",
    },
  });
};

export const aicAction = async (
  type: string,
  mobileNumber: string,
  collegeName: string,
  firstMember: string,
  secondMember: string,
  transactionId: string
) => {
  await prisma.aicons.create({
    data: {
      Type: type,
      Number: mobileNumber,
      College: collegeName,
      Participant1: firstMember,
      Participant2: secondMember,
      TransactionId: transactionId,
    },
  });
};

export const aicfAction = async (
  type: string,
  mobileNumber: string,
  collegeName: string,
  firstMember: string,
  secondMember: string,
  transactionId: string
) => {
  await prisma.aiCF.create({
    data: {
      Type: type,
      Number: mobileNumber,
      College: collegeName,
      Participant1: firstMember,
      Participant2: secondMember,
      TransactionId: transactionId,
    },
  });
};

export const contact = async (
  name1: string,
  email: string,
  phone: string,
  college: string,
  msg: string
) => {
  await prisma.contact.create({
    data: {
      name: name1,
      email: email,
      phone: phone,
      collegeName: college,
      message: msg,
    },
  });
};

export const dsprint = async (
  firstMember: string,
  mobileNumber: string,
  collegeName: string
) => {
  await prisma.dataSprint.create({
    data: {
      name: firstMember,
      Number: mobileNumber,
      College: collegeName,
      TransactionId: "-",
    },
  });
};

export const esports = async (
  enroll: string,
  teamName: string,
  name1: string,
  name2: string,
  name3: string,
  name4: string,
  mobileNumber: string,
  collegeName: string,
  transactionId: string
) => {
  await prisma.esports.create({
    data: {
      enroll: enroll,
      TeamName: teamName,
      name: name1,
      name2: name2,
      name3: name3,
      name4: name4,
      Number: mobileNumber,
      College: collegeName,
      TransactionId: transactionId,
    },
  });
};

export const fetchHt = async () => {
  const count = await prisma.hackathon.findMany();
  return count;
};

export const fetchGvg = async () => {
  const count = await prisma.gvG.findMany();
  return count;
};

export const fetchAic = async () => {
  const count = await prisma.aicons.findMany();
  return count;
};
export const fetchAicf = async () => {
  const count = await prisma.aiCF.findMany();
  return count;
};
export const fetchDs = async () => {
  const count = await prisma.dataSprint.findMany();
  return count;
};
export const fetchTth = async () => {
  const count = await prisma.techTH.findMany();
  return count;
};

export const fetchTsu = async () => {
  const count = await prisma.techStar_Unplugged.findMany();
  return count;
};

export const fetchEs = async () => {
  const count = await prisma.esports.findMany();
  return count;
};
