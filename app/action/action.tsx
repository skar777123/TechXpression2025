"use server";

import prisma from "../db/db";

export const HackathonAction = async (
  teamName : string,
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
  collegeName: string
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
    },
  });
};

export const aicAction = async (
  type: string,
  mobileNumber: string,
  collegeName: string,
  firstMember: string,
  secondMember: string
) => {
  await prisma.aicons.create({
    data: {
      Type: type,
      Number: mobileNumber,
      College: collegeName,
      Participant1: firstMember,
      Participant2: secondMember,
    },
  });
};

export const aicfAction = async (
  type: string,
  mobileNumber: string,
  collegeName: string,
  firstMember: string,
  secondMember: string
) => {
  await prisma.aiCF.create({
    data: {
      Type: type,
      Number: mobileNumber,
      College: collegeName,
      Participant1: firstMember,
      Participant2: secondMember,
    },
  });
};

export const contact = async (name1: string, email: string, phone: string, college: string, msg: string) => {
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
