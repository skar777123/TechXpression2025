"use server";

import prisma from "../db/db";

export const HackathonAction = async (
  teamName,
  leaderName,
  mobileNumber,
  secondMember,
  thirdMember,
  fourthMember,
  collegeName,
  transactionId
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
  teamName,
  leaderName,
  mobileNumber,
  secondMember,
  thirdMember,
  collegeName,
  transactionId
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
  teamName,
  leaderName,
  mobileNumber,
  secondMember,
  thirdMember,
  fourthMember,
  collegeName
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
  type,
  leaderName,
  mobileNumber,
  secondMember,
  thirdMember,
  fourthMember,
  collegeName
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
  type,
  mobileNumber,
  collegeName,
  firstMember,
  secondMember
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
  type,
  mobileNumber,
  collegeName,
  firstMember,
  secondMember
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

export const contact = async (name1, email, phone, college, msg) => {
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
